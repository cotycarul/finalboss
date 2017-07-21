import React from 'react';

import SubmitField from 'uniforms-unstyled/SubmitField';
import TextField   from 'uniforms-unstyled/TextField';

export default class PostCreate extends React.Component {

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <SubmitField schema={SchemaPosts} onSubmit={this.onSubmit.bind(this)}>
                        <TextField name="title" placeholder="Title"/>
                        <AutoText name="description" placeholder="Description"/>
                    </SubmitField>
                </div>
            </div>
        )
    }
}