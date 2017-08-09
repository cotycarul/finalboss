import React from 'react';
import {Meteor} from 'meteor/meteor'

export default class PostList extends React.Component {

    componentWillMount() {
        if (!Meteor.userId()) {
            alert("You are not logged in, you will be redirected to the login page");
            //FlowRouter.go('/');
            FlowRouter.redirect('/login');
        }
    }

    logout() {
        Meteor.logout();
        FlowRouter.redirect('/');
    }

    goToShowPosts() {
        FlowRouter.go('/post/index');
    }
    goToCreatePost() {
        FlowRouter.go('/post/create');
    }
    goToEditPost() {
        FlowRouter.go('/post/edit');
    }

    render() {
        return (
            <div>
                <button className="glyphicon-object-align-right" onClick={this.goToCreatePost}>Create post</button>
                <button className="glyphicon-object-align-right" onClick={this.goToShowPosts}>Sbow all posts</button>
                <button className="glyphicon-object-align-right" onClick={this.goToEditPost}>Edit</button>
                <button className="glyphicon-object-align-right" onClick={this.logout}>Log out</button>


            </div>
        )
    }
}