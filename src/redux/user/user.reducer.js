import {UserActionTypes } from './user.types';

const INITIL_STATE = {
currentUser:null
}

const userReducer=(state= INITIL_STATE, action)=>{
 switch (action.type) {
     case UserActionTypes.SET_CURRENT_USER:
       return({
           ...state,
           currentUser: action.payload
       })
     
       default:
         return state;
 }
}

export default userReducer;