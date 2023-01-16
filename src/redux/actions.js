import {LOGINUSER, MOVIES} from "./types"
export const loginUser = (user) => {
    return {
        type:LOGINUSER,
        payload: user
    }
}

export const addMovies = (data) => {
    return {
        type:MOVIES,
        payload: data
    }
}