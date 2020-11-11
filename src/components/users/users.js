import React, {Component} from 'react';
import User from "./user";

class Users extends Component {

    state = {
        users:[]
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json()
                .then(users => this.setState({users})))
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        );
    }
}

export default Users;
