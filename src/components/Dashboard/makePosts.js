import React from 'react'
import { Link } from "react-router-dom";

export default ({ post }) => {
    return (
        <Link to={`/post/${post.id}`} >
            <div key={post.id} >
                <h2>{post.title}</h2>
                <h4>by {post.username}</h4>
                <img src={post.profile_pic} alt="" />

            </div>
        </Link>
    )
}
