import { combineReducers } from 'redux';
import authors from './authorsReducer';
import courses from './coursesReducer';

export default combineReducers({
    authors,
    courses
});
