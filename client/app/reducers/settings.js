import Types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case Types.LOAD_API:
      return state.setIn(['api'], action.apiData);
    case Types.UPDATE_LOCATION:
      return state.setIn(['location'], action.location);
    default:
      return state;
  }
}
