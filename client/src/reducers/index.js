import { combineReducers } from 'redux';
import  LoginReducer  from './login-reducer';
import  { teamMembers }  from './teamMembers-reducer';
import  { videoCartoons }  from './videoCartoon-reducer';
import  { contacts }  from './contacts-reducer';
import  { courseInfo }  from './courseInfo-reducer';
import  { students }  from './students-reducer';

const rootReducer = combineReducers({
    logged: LoginReducer,
    teamMembers,
    videoCartoons,
    contacts,
    courseInfo,
    students,
});

export default rootReducer;