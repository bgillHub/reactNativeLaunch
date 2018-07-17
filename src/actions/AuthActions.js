import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED, PASSWORD_CHANGED, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN
 } from './types';
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = ({ email, password }) => {
  const firebase = require('firebase');
  return (dispatch) => {
    dispatch({ type: USER_LOGIN});
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => loginSuccess(dispatch, user))
  .catch((err) => {
    console.log("ERR: ", err)
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => loginSuccess(dispatch, user))
    .catch((err) =>{
      console.log("ERR: ", err);
      loginFail(dispatch);
    });
  });
};
};

const loginSuccess = (dispatch, user) => {
  console.log("dispatchprops2");
  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: user
  });
  //Page navving
  Actions.main();
};

const loginFail = (dispatch) => {
  console.log("dispatchprops3");
  dispatch({
    type: USER_LOGIN_FAILURE,
  });
};
