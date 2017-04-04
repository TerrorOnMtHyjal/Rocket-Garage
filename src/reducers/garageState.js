//import * as actions from '../actions/actions';

const initialState= {
  garages : {
    user : {
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
      secondary : {}
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
      secondary : {}
    }
  }
}

export default function garagesState(state=initialState, action){
  return state;
}