import React from 'react'
import {NavLink} from "react-router-dom";
import {withRouter} from 'react-router'


import './header.css'


 const Header = (props) => {

    return (
        <div className='header'>
            <div className='container'>
                <div className='navbar'>
                   <div className='logo'><h1 onClick={() => props.history.push('/')}>React Router </h1></div>
                    <div>
                        <button className='navBtn'><NavLink exact to='/'>Main</NavLink></button>
                        <button className='navBtn'><NavLink to='/users'>Users</NavLink></button>
                        <button className='navBtn'><NavLink to='/posts'>Posts</NavLink></button>
                        <button className='navBtn'><NavLink to='/comments'>Comments</NavLink></button>
                        <button className='navBtn' onClick={props.autorization} >{
                            props.log?'Logout':'Login'
                        }</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(Header)
