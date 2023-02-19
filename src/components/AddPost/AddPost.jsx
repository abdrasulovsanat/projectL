import React, {useState} from 'react'
import { useContext } from 'react';
import { postsContext } from '../../PostContext';
import {Modal, Button, FormControl} from 'react-bootstrap';

const AddPost = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {addPost, author} = useContext(postsContext);

  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  function createPost () {
    
    let newPost = {
      image,
      content,
      isLike: false,
      author: author
    };

    for (let key in newPost) {
      if(newPost[key] === '') {
        alert('Some inputs are empty!');
        return
      }
    };

    addPost(newPost);

    setImage('');
    setContent('');
  }

  return (
    <div>
      <Button variant="dark" bg="dark" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">

            <FormControl size="lg" className="my-3" placeholder="Image" value={image} onChange={e => setImage(e.target.value)} />

            <FormControl size="lg" className="my-3" placeholder="Title" value={content} onChange={e => setContent(e.target.value)} />

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createPost}>  
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddPost