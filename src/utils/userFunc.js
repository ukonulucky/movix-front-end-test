import {createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth"
import auth, { getData } from "../firebase/firebase"
import { addData } from "../firebase/firebase"
import { loginUser } from "../redux/actions"

export const registerUser =async (email, password, fullName, changeUrl ) => {
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
    } catch (error) {
        alert(error.message)
    }
    }

 export const SignInUser = async (email, password, changeUrl) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
          if(user){
            changeUrl()
            localStorage.setItem("userEmail", JSON.stringify(email))
           
           return
          }
          alert("login account not found")
        
        } catch (error) {
            alert(error.message)
        }
        }
        
