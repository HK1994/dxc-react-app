import * as types from '../constants/actionTypes'

export const loadCourses = () => {
    return async (dispatch) => {
        dispatch({ type: types.LOAD_COURSES_REQUEST });
        try {
            const res = await fetch('http://localhost:3004/courses');
            const payload = await res.json();
            dispatch({ type: types.LOAD_COURSES_SUCCESS, payload });
        } catch (error) {
            dispatch({ type: types.LOAD_COURSES_FAIL, payload: error });
        }
    }
}