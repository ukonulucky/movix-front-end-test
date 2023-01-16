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
            return {
           ...state, user : action.payload
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
