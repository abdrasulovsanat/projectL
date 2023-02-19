import React from 'react';
import { useContext, useEffect, useState } from 'react';
import {Button, Form} from 'react-bootstrap';
import { postsContext } from '../../PostContext';
import { useNavigate, useParams } from 'react-router-dom';

const EditPost = () => {

  const {onePost, getOnePost, updatePost} = useContext(postsContext);
  const [editedPost, setEditedPost] = useState(onePost);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOnePost(id)
  }, []);

  const handleInput = e => {
    
    e.preventDefault();
    
    let newPost = {
      ...onePost,
      [e.target.name]: e.target.value
    };
    
    setEditedPost(newPost)
    
  };

  useEffect(() => {
    setEditedPost(onePost)
  }, [onePost,])

  function saveChanges () {

    for(let key in editedPost) {
      if(editedPost[key] === '') {
        alert('Some inputs are empty!');
        return
      }
    };

    updatePost(id, editedPost);

    navigate('/');
  }

  return onePost ? (
    <>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter image url" value={editedPost.image} name="image" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Content text" value={editedPost.content} name="content" onChange={handleInput}/>
      </Form.Group>
      <Button variant="primary" onClick={saveChanges}>
        Save
      </Button>
    </>
  ) : (
    <h2>Loading</h2>
  )
}

export default EditPost