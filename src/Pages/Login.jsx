import React, {useState} from 'react'
import media from "../public/media.svg"
import formInfo from '../utils/form'
import "../styles/login.css"
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [fullName, setFullName] = useState("")
  const [fullNameError, setFullNameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

const handleSubmit = (e) => {
e.preventDefault()
}
const formData = formInfo.map( (i,j) => 
     {
     let error
      if(i.error === "passwordError"){
        error = passwordError
      } else{
        error = fullNameError
      }
  if(i.error !== "fullNameError"){
    return <div key={j}>
    <input type={i.type} placeholder={i.placeholder} />
    <span>{error ? error : ""}</span>
    </div>
  }
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
  Please sign-in to your account and start your experience.
  </p>
</div>
<form action="">
{formData}
<button>
Login
</button>

</form>
<div className="others">
  <span>Don't have an Account? <Link to="/signup">Rgister</Link></span>
</div>
    </div>
  )
}

export default Login