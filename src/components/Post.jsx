import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, List } from 'antd';
import './styles.css'; 

export const Post = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data));
    }, [postId]);

    useEffect(() => {
        if (post) {
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(response => response.json())
                .then(data => setUser(data));
        }
    }, [post]);

    useEffect(() => {
        if (post) {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
                .then(response => response.json())
                .then(data => setComments(data));
        }
    }, [post]);

    return (
        <div className="card-container">
            {post && user && (
                <Card
                    title={user.name}
                    className="post-card"
                >
                    <p>{post.title}</p>
                    <p>{post.body}</p>
                </Card>
            )}

            <div className="card-container">
                {comments.length > 0 && (
                    <Card
                        title={<div className="comments-header">Comments</div>}
                        className="comments-card"
                    >
                        <List
                            dataSource={comments}
                            renderItem={item => (
                                <List.Item>
                                    <strong>{item.name}</strong>: {item.body}
                                </List.Item>
                            )}
                        />
                    </Card>
                )}
            </div>
        </div>
    );
};
