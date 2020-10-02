import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form'
import { renderInputRegister } from './common/FormElements';

class RegisterForm extends Component {
    onFileChange = (event) =>{
        this.props.onFileChange(event)
    }
    render() {
        return (
            <fieldset>
                <div className='row'>
                    <div className='col-lg-6'>
                        <fieldset className="form-group">
                            <Field
                                placeholder="name"
                                name="name"
                                type="text"
                                component={renderInputRegister} />
                        </fieldset>
                    </div>
                    <div className='col-lg-6'>
                        <fieldset className="form-group">
                            <Field
                                placeholder="surname"
                                name="surname"
                                type="text"
                                component={renderInputRegister} />
                        </fieldset>
                    </div>


                </div>

                <fieldset className="form-group">
                    <Field
                        placeholder="email"
                        name="email"
                        type="text"
                        component={renderInputRegister} />
                </fieldset>
                <fieldset className="form-group">
                    <input
                        type='file'
                        accept='.jpg, .png, .jpeg'
                        onChange = {this.onFileChange}
                    />
                </fieldset>
                <fieldset className="form-group">
                    <Field
                        placeholder="date_of_birth"
                        name="date_of_birth"
                        type="date"
                        component={renderInputRegister} />
                </fieldset>
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
                <fieldset className="form-group">
                    <Field
                        placeholder="passwordAgain"
                        name="passwordAgain"
                        type="password"
                        component={renderInputRegister} />
                </fieldset>

            </fieldset>
        );
    }
}
export default reduxForm({
    form: 'register'
})(RegisterForm)
