import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router";
import PostService from "../../services/post-service";

const Posts = (props) => {

    let [posts, setPosts] = useState([])

    const postApi = new PostService()
    useEffect(() => {
        let isSubscribed = true;
        postApi.getPosts().then(res => {
            if(isSubscribed){
                setPosts(res)
            }
        })
        return () => isSubscribed = false
    })

    return (
        <div>
            {
                posts.map(post => (
                    <div className='card' key={post.id}>
                        <h1> User ID:{post.userId}</h1>
                        <strong>title: {post.title}</strong>
                        <p>body: {post.body}</p>
                        <button className='btn' onClick={() => props.history.push(`posts/${post.id}/comments`)}>Show
                            comments
                        </button>
                    </div>
                ))
            }
        </div>
    );

}

export default withRouter(Posts);
