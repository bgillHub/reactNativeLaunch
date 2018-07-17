import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGIN
  } from '../actions/types'

const INITIAL_STATE = { email: '', password: '', user: null, error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload};
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload};

    case USER_LOGIN_SUCCESS:
      return { ...state,
        user: action.payload,
        error: '',
        loading: false,
        email: '',
        password: ''
     };
    case USER_LOGIN_FAILURE:
      return { ...state, error: "Auth faiiled", loading: false};

    case USER_LOGIN:
      return { ...state, loading: true};
    default:
      return state;
  }
};
