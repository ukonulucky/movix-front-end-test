import React from 'react'
import "../styles/home.css"
import tv from "../public/tv.png"
import icon from "../public/Icon.png"
import {CiSearch} from "react-icons/ci"
import mdn from "../public/mdn.png"
import apple from "../public/apple.png"
import {BsPlayFill} from "react-icons/bs"
function Home() {
  return (
    <div className="wrapper">
      <div className="poster">
      <div className="d-flex py-3  justify-content-between align-items-center "
      style={{
        marginLeft:"80px",
        marginRight:"80px",

      }}
      >
        <div className="d-flex align-items-center gap-2 text-white tv">
          <span>
            <img src={tv} alt="" />
          </span>
         <span>
         Movie
         </span>
        </div>

        <div className="d-flex search align-items-center gap-2 text-white ">
         <input type="text"
         placeholder='what do you want to watch?'
         />
         <CiSearch />
        </div>

        <div className="d-flex align-items-center gap-2 text-white user">
         <span>Hi, your name</span>
         <span>
            <img src={icon} alt="" />
          </span>
        </div>

      </div>
      <div className="content">
       <div className="header">
       <h2>john week 3:</h2>
        <h2>parabellum</h2>
       </div>
       <div className="con">
        <div className="item">
          <img src={mdn} alt="" />
          <span>860/100</span>
        </div>
        <div className="item">
          <img src={apple} alt="" />
          <span>97%</span>
        </div>

       </div>
       <div className="text">
        <span>
        John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
        </span>
        
       </div>
       <button className='play'>
        <BsPlayFill
        style={{
          backgroundColor:"#FFFFFF",
          color:"#BE123C",
          borderRadius:"10px",
        }}
        />
       
          <span>watch trailer</span>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Home