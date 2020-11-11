import React, {Component} from 'react';


class UserPosts extends Component {
    state = {
        userPosts:[]
    }
componentDidMount() {
    const userId = this.props.match.params.id

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=` + userId)
        .then(resp => resp.json())
        .then(userPosts => {
                this.setState({userPosts})
            }
            )

}

    render() {


        return (
            <div>
                {
                    this.state.userPosts.map(post => (
                        <div className='card' key={post.id}>
                            <h1> User ID:{post.userId}</h1>
                            <small>post id : {post.id}</small><br/>
                            <strong>title: {post.title}</strong>
                            <p>body: {post.body}</p>
                            <button className='btn' onClick={()=> this.props.history.push(`${post.id}/comments`)}>Show comments</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default UserPosts;
