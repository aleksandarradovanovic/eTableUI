import {ADD_USER, LOGIN_USER} from './actionTypes'
export const registerUser = (userObject) =>{
    return {
        type:ADD_USER,
        userObject : userObject
    }
}
export const login = (userObject) =>{
    return {
        type:LOGIN_USER,
        userObject : userObject
    }
}