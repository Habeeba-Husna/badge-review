import{useContext} from "react"
import { DataContext } from "./Context";
import { Link } from 'react-router-dom';

import React from 'react'

function Data() {
    const {data,loading}=useContext(DataContext)
    if(loading) return(<p>loading...</p>)
  return (
    <div>
      <h2>Json datas</h2>
      <ul>
      {data.map((post)=>(
        <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}>View Details</Link>
        </li>


))}

      </ul>
      
    </div>
  )
}

export default Data
