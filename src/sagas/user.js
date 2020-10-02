import { call, put } from 'redux-saga/effects'
import agent from '../agent';
import User from '../api/Users';
import { REGISTER, LOGIN } from '../constants/actionTypes';

export function* register(action) {
    console.log(action, 'action');
    let userObject = action.userObject
    try {
        let newObject = {
            name: userObject.name,
            surname: userObject.surname,
            email: userObject.email,
            password: userObject.password,
            username: userObject.username,
            user_image: {
                image: userObject.user_image
            },
            date_of_birth: userObject.date_of_birth,
            user_roles: ['user'],
            activation_status: 'ACTIVE',
            verification_status: 'VERIFIED'
        }
        const response = yield call(User.registerNewUser, newObject);
        if (response && response.data) {
            console.log('tu sam');
            let payload = response.data
            yield put({ type: REGISTER, payload })
        }
    }
    catch (error) {
        console.log(error);
    }

}
export function* login(action) {
    console.log(action, 'action');
    let userObject = action.userObject
    try {
        const response = yield call(User.login, userObject);
        if (response && response.data) {
            let payload = response.data
            yield put({ type: LOGIN, payload })
        }
    }
    catch (error) {
        console.log(error);
    }

}