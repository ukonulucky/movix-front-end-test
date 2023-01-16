// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import {
    getFirestore, collection, getDocs, addDoc
} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ2ZcLYyaVgmseBjggGTzSq9gIcbOjilQ",
  authDomain: "movix-task.firebaseapp.com",
  databaseURL: "https://movix-task-default-rtdb.firebaseio.com",
  projectId: "movix-task",
  storageBucket: "movix-task.appspot.com",
  messagingSenderId: "40530243100",
  appId: "1:40530243100:web:90a1aefd97157b996139d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth

// setting the database
const db = getFirestore()

//
const colRef = collection(db,"users")


export const getData = async() => {
  try {
    const snapShots = await getDocs(colRef)
    if(snapShots){
        const users = []
        snapShots.docs.forEach( doc => {
      users.push({
        ...doc.data(),Id: doc.id
     })
        });
       return users
    }
  } catch (error) {
 console.log(error)   
  }
}

export const addData = async(email, fullName) => {
    console.log("this is the data ", email, fullName)
    try {
        let info = ""
      const data = await addDoc(colRef, {
        email: email,
        fullName: fullName
      })
      if(data){
        info = data
      }
      return info
    } catch (error) {
   console.log("this is the error",error.message)   
    }
  }