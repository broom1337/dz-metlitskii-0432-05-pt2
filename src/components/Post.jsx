import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'antd';

export const Post = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [comms, setComm] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(data => setPost(data));
  }, [postId]);

  useEffect(() => {
    if(post) {
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(response => response.json())
        .then(data => setUser(data));
    }
  }, [post]);
  
  useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(data => setComm(data));
  }, [comms]);

  return (
    <div>
      {post && user && comms &&(
        <Card
          title={user.name}
          style={{
            width: 300,
            margin: 'auto',
            border: '1px solid black',
          }}
        >
          <p>{post.title}</p>
          <p>{post.body}</p>

          <p>{comms.name}</p>
          <p>{comms.body}</p>
        </Card>
      )}
    </div>
  );
};