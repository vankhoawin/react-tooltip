import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const middlewares = applyMiddleware(thunk);

export function configureStore(reducers, initialState = {}) {
  return createStore(
    reducers,
    initialState,
    middlewares,
  );
}

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
  };
}

export function createConstants(route, constants) {
  return constants.reduce((acc, constant) => Object.assign(acc, {
    [constant]: `${route}/${constant}`,
  }), {});
}
