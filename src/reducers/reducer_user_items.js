import * as actions from '../actions/actions';

export default function userItems(state=[], action){
  switch (action.type){
    case actions.USER_ITEMS_SUCCESS:
      if(state === action.userItems){
        return state;
      }
      return [...action.userItems];
    default:
      return state;
  }
}