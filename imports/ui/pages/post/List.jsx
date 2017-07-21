import React from 'react';
import {Meteor} from 'meteor/meteor'
import PostCreate from 'imports/ui/pages/post/PostCreate.jsx'
export default class List extends React.Component {
    componentWillMount() {
        if(!Meteor.userId()) {
            alert("You are not logged in, you will be redirected to the login page")
            FlowRouter.go('/');
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}