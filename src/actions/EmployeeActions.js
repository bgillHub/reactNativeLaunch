import {
  Actions
} from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_DELETE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_FETCH_FAILURE,
  EMPLOYEE_SAVE_SUCCESS
} from './types';

export const employeeUpdate = ({
  prop,
  value
}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {
      prop,
      value
    }
  };
};

export const employeeCreate = ({
  name,
  phone,
  shift
}) => {
  const firebase = require('firebase');
  const {
    currentUser
  } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({
        name,
        phone,
        shift
      })
      .then(() => {
        dispatch({
          type: EMPLOYEE_CREATE
        });
        Actions.pop({
          type: 'reset'
        });
      });
  };
  // return {
  //   type: EMPLOYEE_CREATE,
  //   payload: {name, phone, shift}
  // };
};

export const employeesFetch = () => {
  const firebase = require('firebase');
  const {
    currentUser
  } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEES_FETCH_SUCCESS,
          payload: snapshot.val()
        });
      });
  };
};

export const employeeSave = ({
  name,
  phone,
  shift,
  uid
}) => {
  const firebase = require('firebase');
  const {
    currentUser
  } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({
        name,
        phone,
        shift
      })
      .then(() => {
        dispatch({
          type: EMPLOYEE_SAVE_SUCCESS
        });
        Actions.employeeList({
          type: 'reset'
        });
      });
  };
};

export const employeeDelete = ({
  uid
}) => {
  const firebase = require('firebase');
  const {
    currentUser
  } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({
          type: 'reset'
        });
      });
  };
};
