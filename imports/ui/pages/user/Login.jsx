import React from 'react';
import SimpleSchema from 'simpl-schema';
import AutoForm    from 'uniforms-unstyled/AutoForm';
import AutoField   from 'uniforms-unstyled/AutoField';
import {Meteor} from "meteor/meteor"

const RegisterSchema = new SimpleSchema({
    email: {
        type: String,
        optional: false
    },
    password: {
        type: String,
        optional: false
    },
});

export default class Register extends React.Component {
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

    wrong() {
        alert("E-mail or password don't match");
    }
    render() {
        return (
            <div>
                <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit.bind(this)}>
                    <h1 className="text-center">Log in</h1>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <AutoField name="email" placeholder="Email" />
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
                            <div className="col-md-1"> </div>
                            Don't have an account?
                            <a href="/register"><button type="button" className="btn btn-default">Register</button></a>
                        </div>
                    </div>
                </AutoForm>
            </div>
        )
    }

}