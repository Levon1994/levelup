import { combineReducers } from 'redux';
import  LoginReducer  from './login-reducer';
import  { teamMembers }  from './teamMembers-reducer';
import  { videoCartoons }  from './videoCartoon-reducer';
import  { contacts }  from './contacts-reducer';
import  { courseInfo }  from './courseInfo-reducer';
import { courses } from './courses-reducer';
import  { students }  from './students-reducer';
import { user } from './user-reducer';
import { applyers } from './applyForm-reducer';

const rootReducer = combineReducers({
    logged: LoginReducer,
    teamMembers,
    videoCartoons,
    contacts,
    courseInfo,
    courses,
    students,
    user,
    applyers,
});

export default rootReducer;
