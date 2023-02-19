import React from 'react';
import { useContext, useEffect } from 'react';
import { postsContext } from '../../PostContext';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Like from '../Like/Like';

const PostList = () => {

  const {posts, deletePost, getPosts} = useContext(postsContext);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h3>Posts</h3>
      {posts.map(item => (
        <Card style={{ width: '15rem'}} key={item.id}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.author}</Card.Title>
          <Card.Text>
            {item.content}
          </Card.Text>
        <Like item = {item} />
        <Button variant="success" onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
        <Button variant="dark" onClick={() => navigate(`/details/${item.id}`)}>Details</Button>
        <Button variant="danger" onClick={() => deletePost(item.id)}>Delete</Button>
        </Card.Body>
        </Card>
      ))}
    </>
  )
}

export default PostList