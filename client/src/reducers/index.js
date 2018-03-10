import { combineReducers } from 'redux';
import emailReducer from './reducer_email';
import usernameReducer from './reducer_username';
import passwordReducer from './reducer_password';
import loginReducer from './reducer_login';


const rootReducer = combineReducers({
  emailMsg: emailReducer,
  usernameMsg: usernameReducer,
  passwordMsg: passwordReducer,
  loginOutput: loginReducer
});


export default rootReducer;
