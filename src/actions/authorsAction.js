import * as types from '../constants/actionTypes'

export const loadAuthors = () => {
    return async (dispatch) => {
        dispatch({ type: types.LOAD_AUTHORS_REQUEST });
        try {
            const res = await fetch('http://localhost:3004/authors');
            const payload = await res.json();
            dispatch({ type: types.LOAD_AUTHORS_SUCCESS, payload });
        } catch (error) {
            dispatch({ type: types.LOAD_AUTHORS_FAIL, payload: error });
        }
    }
}