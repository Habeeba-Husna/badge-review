import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from './Context';
import React from 'react';
import { Link } from 'react-router-dom';

function Details() {
  const {id}=useParams(); 
  const {data}=useContext(DataContext);

  const post=data.find((p)=>p.id===parseInt(id));

  if (!post){
    return <p>Post not found</p>; 
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to="/">Back to Post</Link>
    </div>
  );
}

export default Details;
