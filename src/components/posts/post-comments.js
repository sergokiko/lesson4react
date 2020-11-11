import React, {Component} from 'react';

class PostComments extends Component {
    state = {
        comments: []
    }
    componentDidMount() {
       const postID = this.props.match.params.id
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=` + postID)
            .then(resp => resp.json())
            .then(comments => {
                this.setState({comments})
                }
            )
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(comment => {
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
}

export default PostComments;
