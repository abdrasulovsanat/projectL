import React, { useContext } from 'react';
import { postsContext } from '../../PostContext';

const Like = ({item}) => {

  const { putLikedPost } = useContext(postsContext);

function changeIsLike (e) {

    e.preventDefault();
    putLikedPost(item.id, !item.isLike);

  };

  return item ? (
    <>
      <a href='#' className="mx-2" style={{textDecoration: 'none'}} onClick={ changeIsLike }>
      {item.isLike ? '❤️' : '🤍'}
      </a>
    </>
  ) : (<h1>Loading</h1>)
};

export default Like