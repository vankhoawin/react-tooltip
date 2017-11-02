import { createReducer, createConstants } from '../../utils';


export const NAME = 'tooltip';

export const types = createConstants(NAME, [
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE',
]);

export const initialState = {
  currentUser: {
    id: 1,
    type: 'user',
    name: 'Van',
  },
  users: {},
  err: null,
  isFetching: false,
};

const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST,
});
const fetchUserSuccess = (payload) => ({
  type: types.FETCH_USER_SUCCESS,
  payload,
});
const fetchUserFailure = (err) => ({
  type: types.FETCH_USER_FAILURE,
  payload: err,
});

export const actions = {
  fetchUser: (userId) => (dispatch) => {
    dispatch(fetchUserRequest());

    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then(response => response.json())
      .then((result) => {
        dispatch(fetchUserSuccess(result));
      })
      .catch((err) => {
        dispatch(fetchUserFailure(err));
      });
  },
};

export default createReducer(initialState, {
  [types.FETCH_USER_REQUEST]: (state) => ({
    ...state,
    isFetching: true,
  }),
  [types.FETCH_USER_SUCCESS]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    users: {
      ...state.users,
      [payload.id]: payload,
    },
  }),
  [types.FETCH_USER_FAILURE]: (state, { payload }) => ({
    ...state,
    isFetching: false,
    err: payload,
  }),
});
