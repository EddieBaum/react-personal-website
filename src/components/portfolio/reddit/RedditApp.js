import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './redditApp.css'; 

const RedditApp = () => {

  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [topic, setTopic] = useState("Coronavirus"); // Set default topic

  useEffect(() => {
    axios
      .get(`https://www.reddit.com/r/${topic}/top.json?limit=10`)
      .then((res) => {
        setPosts(res.data.data.children.map(child => child.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [topic]);

  const handleInputChange = (event) => {
    setTopic(event.target.value);
  }

  const handlePostClick = (post) => {
    axios
      .get(`https://www.reddit.com/r/${topic}/comments/${post.id}.json`)
      .then((res) => {
        setComments(res.data[1].data.children.slice(0, 5).map(child => child.data.body));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  console.log(comments)

  return (
    
    <div className='redditApp-parent-div'>
      <input type="text" value={topic} onChange={handleInputChange} />
      <button onClick={() => setTopic(topic)}>Search</button>
      <h1>Top Posts from {topic}</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2 onClick={() => handlePostClick(post)}>{post.title}</h2>
          <a href={`https://reddit.com${post.permalink}`}>Link to post</a>
        </div>
      ))}
      {comments.length > 0 && <div>
        <h2>Comments:</h2>
        {comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>}
    </div>
  );
};

export default RedditApp;


