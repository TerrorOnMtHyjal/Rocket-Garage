import * as actions from '../actions/actions';

const initialState = {};

export default function garagesState(state=initialState, action){
  switch (action.type){
    case actions.GARAGES_GET_SUCCESS:
      const newState = { ...state };

      newState[action.ownerDetails.username] = {
        ownerDetails : {
          uid : action.ownerDetails.uid,
          steamID : action.ownerDetails.steamID,
        },
        garages : action.garages,
      }

      return { ...newState };
    case actions.LOGOUT_USER:   
      return { ...state, user : {} };
    default:
      return state;
  }
}