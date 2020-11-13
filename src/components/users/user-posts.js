import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router";
import UserService from "../../services/user-service";


const UserPosts = (props) => {
    let [userPosts, setUserPosts] = useState([])

    const userApi = new UserService();

    useEffect(() => {
        let isSubscribed = true
        const id = props.match.params.id
            userApi.getUserPosts(id).then(res => {
                if(isSubscribed){
                    setUserPosts(res)
                }
            })
            return () => isSubscribed = false
    })


    return (
        <div>
            {
                userPosts.map(post => (
                    <div className='card' key={post.id}>
                        <h1> User ID:{post.userId}</h1>
                        <small>post id : {post.id}</small><br/>
                        <strong>title: {post.title}</strong>
                        <p>body: {post.body}</p>
                        <button className='btn' onClick={() => props.history.push(`${post.id}/comments`)}>Show
                            comments
                        </button>
                    </div>
                ))
            }
        </div>
    );

}

export default withRouter(UserPosts);
