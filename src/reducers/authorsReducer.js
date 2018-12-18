import * as types from '../constants/actionTypes'

const initialState = {
    loading: false,
    data: [],
    error: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case types.LOAD_AUTHORS_REQUEST:
    return { ...state, loading: true }

    case types.LOAD_AUTHORS_SUCCESS:
    return { ...state, loading: false, data: payload  }

    case types.LOAD_AUTHORS_FAIL:
    return { ...state, loading: false, error: payload  }

  default:
    return state
  }
}
