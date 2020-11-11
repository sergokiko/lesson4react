import React, {Component} from 'react';

class Posts extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json()
                .then(posts => this.setState({posts})))
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => (
                        <div className='card' key={post.id}>
                            <h1> User ID:{post.userId}</h1>
                            <strong>title: {post.title}</strong>
                            <p>body: {post.body}</p>
                            <button className='btn' onClick={()=> this.props.history.push(`posts/${post.id}/comments`)}>Show comments</button>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Posts;
