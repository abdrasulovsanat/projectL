import React, {useState} from 'react';
import axios from 'axios';

export const postsContext = React.createContext()

const PostsContextProvider = ({children}) => {

    const POSTSAPI = 'http://localhost:8000/posts';

    const [posts, setPosts] = useState([]);
    const [onePost, setOnePost] = useState(null); //задаем состояние одному посту
    const [author, setAuthor] = useState('author');


    async function getPosts () {
        let res = await axios(POSTSAPI);
        setPosts(res.data) //получаем все посты
        // console.log(res.data);
    };

    async function addPost(postObj) {
        await axios.post(POSTSAPI, postObj);
        getPosts();
    };

    async function getOnePost(id) {
        let res = await axios(`${POSTSAPI}/${id}`);
        setOnePost(res.data)
    }

    async function deletePost(id) {
        await axios.delete(`${POSTSAPI}/${id}`);
        getPosts();
    };

    async function updatePost (id, editedPost) {
        await axios.patch(`${POSTSAPI}/${id}`, editedPost);
        getPosts();
    };

    async function putLikedPost (id, isLike) {
        await axios.patch(`${POSTSAPI}/${id}`, { isLike: isLike }); //ключ - значение
        getPosts();
    }

  return (
    <postsContext.Provider value={{

        posts,
        onePost,
        author,

        getPosts,
        addPost,
        getOnePost,
        deletePost,
        updatePost,
        putLikedPost

    }}>
        {children}
    </postsContext.Provider>
  )
}

export default PostsContextProvider