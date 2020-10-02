import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderInputRegister } from './common/FormElements';

class LoginForm extends Component {
    render() {
        return (
            <fieldset>
                <fieldset className="form-group">
                    <Field
                        placeholder="username"
                        name="username"
                        type="text"
                        component={renderInputRegister} />
                </fieldset>
                <fieldset className="form-group">
                    <Field
                        placeholder="password"
                        name="password"
                        type="password"
                        component={renderInputRegister} />
                </fieldset>
            </fieldset>
        );
    }
}
export default reduxForm({
    form: 'login'
})(LoginForm)
