import React, {useEffect, useState} from 'react';
import User from "./user";
import UserService from "../../services/user-service";

const Users = () => {
   const usersApi = new UserService();

  let [users, setUsers] = useState([])

    useEffect (() => {
        usersApi.getUsers().then(users => setUsers(users))
    })


        return (
            <div>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
        );

}

export default Users;
