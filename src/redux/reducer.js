import { LOGINUSER, MOVIES} from "./types";
import { loginUser, addMovies } from "./actions";

const initialState = {
    userLogin: "",
    movies: [],
    loading: true
}

export const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGINUSER:
            console.log("code ran in reducer");
            return {
           ...state, userLogin : action.payload
       }   
           break;
       case MOVIES:
            return {
           ...state, movies : action.payload , loading : false 
       }   

           break;
       default: return state
           break;
   }
}
