
import React from 'react'

import {useEffect, useState} from 'react'
import CommentsService from "../../services/CommentsService";

const Comments = () => {

    let commentsApi = new CommentsService();
    let [comments, setComments] = useState([]);

    useEffect(() => {
        let isSubscribed = true
        commentsApi.getComments().then(value => {
            if(isSubscribed){
            setComments(value)
            }}
        )
        return () => isSubscribed = false
    } )

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

export default Comments;
