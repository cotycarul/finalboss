import React from 'react';
import {Meteor} from 'meteor/meteor'


export default class List extends React.Component {
    componentWillMount() {
        if(!Meteor.userId()) {
            alert("You are not logged in, you will be redirected to the login page")
            //FlowRouter.go('/');
            FlowRouter.redirect('/');

        }
    }
    logout() {
        Meteor.logout();
        FlowRouter.redirect('/');
    }
    render() {
        return (
            <div>
                <button className="glyphicon-object-align-right" onClick={this.logout.bind(this)}>Log out</button>
            </div>
        )
    }
}