import React from "react";
import {Routes, Route} from 'react-router-dom';
import AddPost from '../src/components/AddPost/AddPost';
import EditPost from '../src/components/EditPost/EditPost';
import PostList from '../src/components/PostList/PostList';
import Details from '../src/components/Details/Details';
import PostsContextProvider from "./PostContext";

const MainRoutes = () => {
  return (
    <PostsContextProvider>
        <Routes>
            <Route path="/" element={<PostList /> }/>
            <Route path="/edit/:id" element={<EditPost />}/>
            <Route path="/add" element={<AddPost />}/>
            <Route path="/details/:id" element={<Details />}/>
        </Routes>
    </PostsContextProvider>
  )
}

export default MainRoutes