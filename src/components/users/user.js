import React from 'react'
import {withRouter} from 'react-router'

 const User = (props) => {
    const {user} = props
    return(
        <div className='card'>
            <h2>{user.name}</h2>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
            <button className='btn' onClick={()=> props.history.push(`/users/posts/${user.id}`)}>Show posts</button>
        </div>
    )
}
export default withRouter(User)
