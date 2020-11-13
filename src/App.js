import React from "react";
import {Route, Switch} from "react-router";


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

    }

    render() {
        return (
            <div>
                <Header log={this.state.authorization} autorization={this.authorizationFunc}/>
                <div className='container'>
                    <Switch>
                        <Route path='/' exact component={Main}/>
                    {
                        this.state.authorization &&(
                            <Switch>
                                <Route path='/users/posts/:id/comments' component={PostComments}/>
                                <Route path='/users/posts/:id'  component={UserPosts}/>
                                <Route path='/posts/:id/comments'  component={PostComments}/>
                                <Route path='/users'  component={Users}/>
                                <Route path='/posts'  component={Posts}/>
                                <Route path='/comments'  component={Comments}/>
                                <Route path='/' exact component={Main}/>
                            </Switch>
                        )
                    }

                        <Route render={()=> <ErrorPage/>}/>

                    </Switch>

                </div>

            </div>
        );
    }


}

export default App;
