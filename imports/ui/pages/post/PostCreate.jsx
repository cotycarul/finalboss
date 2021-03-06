import React from 'react';
import {Meteor} from 'meteor/meteor'
import SimpleSchema from 'simpl-schema';

import AutoField from 'uniforms-unstyled/AutoField';
import AutoForm from 'uniforms-unstyled/AutoForm';
import LongTextField from 'uniforms-unstyled/LongTextField';
import SubmitField from 'uniforms-unstyled/SubmitField';

const PostsSchema = new SimpleSchema({
    title: {
        type: String,
        label: "Title:",
        max: 50,
    },
    description: {
        type: String,
        label: "Description:",
        max: 50
    }
});

export default class PostCreate extends React.Component {

    componentWillMount() {
        if (!Meteor.userId()) {
            alert("You are not logged in, you will be redirected to the login page");
            //FlowRouter.go('/');
            FlowRouter.redirect('/login');
        }
    }

    onSubmit(data) {
        console.log("Creating new post...");
        data.userId = Meteor.userId();
        Meteor.call('post.create', data, function (err, res) {
            if (err) {
                alert(err);

            }
            else {
                alert("Post Created successfully");
                FlowRouter.go('/post/list')
            }
        })
    }

    render() {
        return (
            <div>
                <AutoForm schema={PostsSchema} onSubmit={this.onSubmit.bind(this)}>
                    <h2>Create post</h2>

                    <AutoField name="title"/>
                    <LongTextField name="description"/>
                    <div>
                        <SubmitField/>
                    </div>

                </AutoForm>
            </div>
        )
    }


}