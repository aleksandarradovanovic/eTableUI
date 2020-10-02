import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes';
import { login } from '../actions/user';
import LoginForm from './LoginForm';
import { getFormValues } from 'redux-form'
import FacebookLogin from 'react-facebook-login';

const formValuesSelector = getFormValues('login')
function mapStateToProps(state) {
  return {
    formValues: formValuesSelector(state)
  };
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (userObject) =>
    dispatch(login(userObject)),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Login extends React.Component {
  constructor() {
    super();
    this.submitForm = (userObject) => ev => {
      ev.preventDefault();
      this.props.onSubmit(userObject);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }
  responseFacebook = (response) => {
    console.log(response);
  }


  render() {
    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign In</h1>
              <p className="text-xs-center">
                <Link to="/register">
                  Need an account?
                </Link>
              </p>
              <ListErrors errors={this.props.errors} />
              <form onSubmit={this.submitForm(this.props.formValues)}>
                <LoginForm />
                <FacebookLogin
                  appId="246291516793186"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={this.responseFacebook}
                  cssClass="my-facebook-button-class"
                  icon="fa-facebook"
                />
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={this.props.inProgress}>
                  Sign in
                  </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
