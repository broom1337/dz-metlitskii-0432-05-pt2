import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css'; 

export const Cards = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data));

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    const handleClick = (postId) => {
        navigate(`/post/${postId}`); 
    };

    return (
        <div className="card-container">
            {posts.map(post => (
                <div key={post.id} className="card-item">
                    <Card
                        title={(users.find(user => user.id === post.userId) || {}).name}
                        className="card"
                    >
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                        <Button className="card-button" type="dashed" onClick={() => handleClick(post.id)}>View</Button>
                    </Card>
                </div>
            ))}
        </div>
    );
};
