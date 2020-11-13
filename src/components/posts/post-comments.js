import React, {useState, useEffect} from 'react';
import {withRouter} from "react-router";
import PostService from "../../services/post-service";

const PostComments = props =>{
   let [comments, setComments] = useState([])

   const postApi = new PostService()
    useEffect(() => {
        const postID = props.match.params.id;
        let isSubscribed = true
        postApi.getPostComments(postID).then(res => {
            if(isSubscribed){
                setComments(res)
            }
        })
        return () => isSubscribed = false
    })




        return (
            <div>
                {
                    comments.map(comment => {
                        return (
                            <div className='card' key={comment.id}>
                                <h1>name: {comment.name}</h1>
                                <p>email: {comment.email}</p>
                                <p>body: {comment.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        );

}

export default withRouter(PostComments) ;
