import * as actions from '../actions/actions';

const _initialState= {
  user : {
    primary : {
      gid : undefined,
      items : [],
      activeItemType : "have",
      header : undefined,
      subheader : undefined,
      platform : undefined
    },
    secondary : []
  },
  viewed : {
    uid : undefined,
    username :undefined,
    steamID : undefined,
    primary : {
      gid : undefined,
      items : [],
      activeItemType : "have",
      header : undefined,
      subheader : undefined,
      platform : undefined
    },
    secondary : []
  }
}

const initialState = {};

export default function garagesState(state=initialState, action){
  switch (action.type){
    case actions.GARAGES_GET_SUCCESS:

      return { ...action.garages };
    case actions.LOGOUT_USER:
    
      return { ...state, user : {} };
    default:
      return state;
  }
}