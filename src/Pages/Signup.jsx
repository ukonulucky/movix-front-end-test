import React, {useState} from 'react'
import media from "../public/media.svg"
import formInfo from '../utils/form'
import "../styles/signup.css"
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"
import {registerUser} from "../utils/userFunc"
import { addData, getData } from '../firebase/firebase'

function Signup() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [fullName, setFullName] = useState("")
  const [fullNameError, setFullNameError] = useState("")
  const [type, setType] = useState("text")
  
  
const navigate = useNavigate()
const changeUrl  = (x) => {
  navigate(`/${x}`)
}
// getData()
const handleSubmit = (e) => {
e.preventDefault()
if(!email || !password || !fullName){
  handleError()
  return
}else{
  setEmailError("")
  setPassword("")
  setFullNameError("")
  setEmail("")
  setFullName("")
  setPassword("")
 registerUser(email, password, fullName, changeUrl)
 
}
console.log(fullName, password, email)
}

const handleError = () => {
  if(!password){
    setPasswordError("Password is required")
  }else{
    setPasswordError("")
  }
  if(!email){
    setEmailError("Email is required")
  }else{
    setEmailError("")
  }
  if(!fullName){
    setFullNameError("Full Name is required")
  }else{
    setFullNameError("")
  }
}
const formData = formInfo.map( (i,j) => 
     {
     let error
     let value
    
      if(i.error === "passwordError"){
        error = passwordError
        value = password
      }else if(i.error === "fullNameError"){
        error =fullNameError
        value = fullName
      } else{
        error = emailError
        value = email
      }
      const setFunc  = (e) => {
        if(i.error === "passwordError"){
              setPassword(e.target.value)
        }else if (i.error === "fullNameError"){
                 setFullName(e.target.value)
        }else{ 
             setEmail(e.target.value)
        }
      }
    

   return <div key={j}>
    {
      i.type === "password" ? <div className='input'>
        <input type={type} value={value}  placeholder={i.placeholder} onChange={(e) => {
        setFunc(e)
        console.log(value)
      }} />
    <div
    className='d-flex align-center justify-content-center pe-2'
    onClick={() => {
      if(type === "text"){
        setType("password")
      }else{
        setType("text")
      }
      
    }}>
    {
        type === "password" ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
    }
    </div>
      </div> : <div className='input'>
      <input type={i.type} value={value}  placeholder={i.placeholder} onChange={(e) => {
        setFunc(e)
        console.log(value)
      }} />
      </div>
     
      }
    <span>{error ? error : ""}</span>
    </div>
}
)
  return (
    <div className="wrapper d-flex align-items-center justify-content-center flex-column gap-3">
<div className="img">
  <img src={media} alt="" />
</div>
<div className="header">
  <h2>Hi, Welcome</h2>
  <p>
Please sign-up to your start your experience.
  </p>
</div>
<form onSubmit={handleSubmit}>
{formData}
<button>
  Register
</button>

</form>
<div className="others">
  <span>Allready have an Account? <Link to="/login">Login</Link></span>
</div>
    </div>
  )
}

export default Signup