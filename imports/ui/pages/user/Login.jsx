import React from 'react';
import {Meteor} from "meteor/meteor"
import SimpleSchema from 'simpl-schema';

import AutoForm from 'uniforms-unstyled/AutoForm';
import AutoField from 'uniforms-unstyled/AutoField';


const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        label: 'E-mail: ',
        optional: false
    },
    password: {
        type: String,
        label: 'Password: ',
        optional: false
    },
});

export default class Login extends React.Component {
    onSubmit(data) {
        Meteor.loginWithPassword(data.email, data.password, function (err) {
            if (!err) {
                alert('I was called because authentication was a success');
                FlowRouter.go('/post/list');
            } else {
                alert(err);
            }
        })
    }

    render() {
        return (
            <div>
                <AutoForm schema={LoginSchema} onSubmit={this.onSubmit.bind(this)}>
                    <h1 className="text-center">Log in</h1>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <AutoField name="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <AutoField name="password" type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div>
                            <button type="submit" className="btn btn-secondary">Log in</button>
                            <div className="col-md-1"></div>
                            Don't have an account?
                            <a href="/register">
                                <button type="button" className="btn btn-default">Register</button>
                            </a>
                        </div>
                    </div>
                </AutoForm>
            </div>
        )
    }

}