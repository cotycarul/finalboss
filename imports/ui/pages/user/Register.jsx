import React from 'react';
import SimpleSchema from 'simpl-schema';
import AutoForm    from 'uniforms-unstyled/AutoForm';
import AutoField   from 'uniforms-unstyled/AutoField';

const RegisterSchema = new SimpleSchema({
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
    confirmPassword: {
        type: String,
        label: 'Confirm Password: ',
    }
});

export default class Register extends React.Component {
    onSubmit(data) {
        if(data.password !== data.confirmPassword)
            this.wrongPassword();
        else
            Meteor.call('user.register',data , function (err, res) {
                if(err)
                    alert(err);
                else
                    alert("You have been registred!")
            })
    }
    wrongPassword() {
        alert("Passwords don't match!");
    }
    render() {
        return (
            <div>
            <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit.bind(this)}>
                <h1 className="text-center">Register</h1>
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
                <div className="form-group">
                    <div className="col-sm-10">
                        <AutoField name="confirmPassword" type="password" placeholder="Confirm Password"/>
                    </div>
                </div>
                <div className="col-sm-10">
                    <div>
                        <button type="submit" className="btn btn-secondary">Register</button>
                        <div className="col-md-1"> </div>
                        Already have an account?
                        <a href="/login"><button type="button" className="btn btn-default">Log in</button></a>
                    </div>
                </div>
            </AutoForm>
            </div>
        )
    }

}