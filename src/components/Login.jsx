import { useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"







function Login() {

  const[user,setUser]=useState([])

  let navigate=useNavigate()


  const [data,setData]=useState({
      
      email:"",
      pass:""
  })
  

  const getdata=(e)=>{


      const{value,name}=e.target

      setData(()=>{
          return{
              ...data,[name]:value
          }
      })

  }




  const savedata=(e)=>{
      e.preventDefault()

      const getuserdetail=localStorage.getItem("userdetails")
      console.log(getuserdetail)

      const {email,pass}=data

       if(email=== "" ){
          alert("please enter your email")
      }
      else if(pass=== "" ){
          alert("please enter your password")
      }
      else{
          if(getuserdetail && getuserdetail.length){
            const userdata=JSON.parse(getuserdetail)

            const loginuser=userdata.filter((el,i)=>{
              return el.email===email && el.pass===pass
            })
            if(loginuser.length===0){
              alert("please fill the correct details")
            }
            else{
              alert("login succesfull")
              navigate("/task")
            }

          }
      }

  }




  return (
    <div>

      <div className='login' style={{ height: "300px", width: "300%", marginLeft: "40px" }}>
        <h1>LogIn</h1>
        <div>
          <input name='email' onChange={getdata} placeholder='enter your email' type="text" />
        </div>
        <div>
          <input name='pass' onChange={getdata} placeholder='enter your password' type="text" />
        </div>
        <button className='btn' onClick={savedata} >Login</button>


      </div>

    </div>
  )
}

export default Login
