import React from "react";
import {Route} from "react-router";


import './App.css';
import {Main} from "./components/main";
import Users from "./components/users/users";
import Posts from "./components/posts/posts";

import Header from "./components/header";
import UserPosts from "./components/users/user-posts";
import Comments from "./components/comments/comments";
import PostComments from "./components/posts/post-comments";
import {ErrorPage} from "./components/errorpage";


class App extends React.Component {
    state = {
        authorization: false
    }

    authorizationFunc = () => {
        this.setState({authorization: !this.state.authorization})
        console.log('clicked')
    }

    render() {
        return (
            <div>
                <Header log={this.state.authorization} autorization={this.authorizationFunc}/>
                <div className='container'>
                    <Route path='/' exact component={Main}/>

                    {
                        this.state.authorization && (
                            <>
                                <Route path='/users/posts/:id/comments' exact component={PostComments}/>
                                <Route path='/users/posts/:id' exact component={UserPosts}/>
                                <Route path='/users' exact component={Users}/>
                                <Route path='/posts' exact component={Posts}/>
                                <Route path='/comments' exact component={Comments}/>
                            </>
                        )
                    }
                    <Route render={()=> <ErrorPage/>}/>


                </div>

            </div>
        );
    }


}

export default App;
