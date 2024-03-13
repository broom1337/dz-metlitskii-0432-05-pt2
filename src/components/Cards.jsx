import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';

export const Cards = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []);
  const handleClick = (postId) => {
    window.open('/post/' + postId);
  };
  return (
    <div>
      {posts.map(post => (
        <Card
          key={post.id}
          title={users.find(user => user.id === post.userId).name}
          style={{
            width: 300,
            margin: 'auto',
            border: '1px solid black'
          }}
        >
          <p>{post.title}</p>
          <p>{post.body}</p>
          <Button type="dashed" onClick={() => handleClick(post.id)}>View</Button>
        </Card>
        
      ))}
    </div>
  );
};
