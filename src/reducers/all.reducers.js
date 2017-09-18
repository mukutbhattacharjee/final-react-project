import {combineReducers} from 'redux';
import UserReducer from './reducer.users';
import AdminReducer from './reducer.admin';

const allReducers = combineReducers({
    users: UserReducer,
    admins: AdminReducer
});

export default allReducers;