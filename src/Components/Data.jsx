import{useContext} from "react"
import { DataContext } from "./Context";
import { Link } from 'react-router-dom';

import React from 'react'

function Data() {
    const {data,loading}=useContext(DataContext)
    if(loading) return(<p>loading...</p>)
  return (
    <div>
      <h1>Json datas</h1>
      <ol>
      {data.map((post)=>(
        <li key={post.id}>
            <h3>{post.title}</h3>
            {/* <p>{post.body}</p> */}
            <Link to={`/post/${post.id}`}>View</Link>
        </li>


))}

      </ol>
      
    </div>
  )
}

export default Data
