import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth"
import auth, { getData } from "../firebase/firebase"
import { addData } from "../firebase/firebase"
export const registerUser =async (email, password, fullName, changeUrl) => {
try {
    const user = await createUserWithEmailAndPassword(auth,email, password)
    if(user){
       addData(email, fullName)
       changeUrl("login")
    }
} catch (error) {
    alert(error.message)
}
}


export const SignOutUser =async (email, password) => {
    try {
        const user = await signOut(auth)
        return auth
    } catch (error) {
        alert(error.message)
    }
    }

 export const SignInUser =async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
             if(user){
            const usersList = getData()
        const data =   usersList.findOne((i) => {
                   return i.email === email
            })
          const  userInfo = JSON.parse(localStorage.setItem("email",data))
             }
        } catch (error) {
            alert(error.message)
        }
        }
        
