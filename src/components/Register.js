import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import { getFormValues, change } from 'redux-form'

import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';
import RegisterForm from './RegisterForm';
import { registerUser } from '../actions/user';

const formValuesSelector = getFormValues('register')
function mapStateToProps(state) {
  return {
    formValues: formValuesSelector(state)
  };
}

const mapDispatchToProps = dispatch => ({
  
  onSubmit: (registerObject) => {
    dispatch(registerUser(registerObject))
  },
  onFileChange: (event) => {
    let files = event.target.files;
    console.log(files, 'files');

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function (upload) {
      dispatch(change('register', 'user_image', upload.target.result.split(',')[1]))

    };

  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class Register extends React.Component {
  constructor() {
    super();
    this.submitForm = (submitObject) => ev => {
      ev.preventDefault();
      this.props.onSubmit(submitObject);
    }

  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">
                  Have an account?
                </Link>
              </p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(this.props.formValues)}>
                <fieldset>
                  <RegisterForm onFileChange={this.props.onFileChange} />
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Sign up
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
