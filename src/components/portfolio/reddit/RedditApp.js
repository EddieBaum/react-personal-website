import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './redditApp.css'; 

const RedditApp = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.reddit.com/r/Coronavirus/top.json?limit=10")
      .then((res) => {
        setPosts(res.data.data.children.map(child => child.data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className='redditApp-parent-div'>
      <h1>Top Posts from COVID-19</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <a href={`https://reddit.com${post.permalink}`}>Link to post</a>
        </div>
      ))}
    </div>
  );
};

export default RedditApp;
