import {fork, takeEvery} from 'redux-saga/effects';
import * as types from '../actions/actionTypes'
import { register, login } from './user';

// import {getUsers,loginUser,registerNewUser} from './users'
// import {addMenu,getMenu} from './menu'

export function* sagas(){
yield takeEvery(types.ADD_USER, register)
yield takeEvery(types.LOGIN_USER, login)
// yield takeEvery(types.LOGIN_USER, loginUser)
// yield takeEvery(types.REGISTER_USER, registerNewUser)
// // yield takeEvery(types.ADD_MENU, addMenu)
// yield takeEvery(types.GET_MENU, getMenu)

}


