import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      const stateObject = _.mapKeys(action.payload.data, 'id');
      return stateObject;
    default:
      return state;
  }
}
