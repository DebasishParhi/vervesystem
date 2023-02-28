import React, { useState } from 'react'
import "./Cssfile.css"
import Login from './Login'

function Register() {

   

    


    const[user,setUser]=useState([])


    const [data,setData]=useState({
        name:"",
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
        console.log(data) 
        const {name,email,pass}=data

        if(name===   "" ){
            alert("please enter your name")
        }
        else if(email=== "" ){
            alert("please enter your email")
        }
        else if(pass=== "" ){
            alert("please enter your password")
        }
        else{
            localStorage.setItem("userdetails",JSON.stringify([...user,data]))
            alert("Register succesfully")
        }

    }

   

  return (
  <div>
    <div className='maindiv'>

        <div className=''>
            <Login/>
        </div>

     
        <div className='Register'>
          
            <div>
                <h1>Register</h1>

            <div>
                <input name='name' onChange={getdata} placeholder='enter your name' type="text" />
            </div>
            <div>
                <input name='email' onChange={getdata} placeholder='enter your email' type="email" />
            </div>
            <div>
                <input name='pass' onChange={getdata} placeholder='enter your password' type="password"  />
            </div>
            <button onClick={savedata} className='btn'>Register</button>
            </div>

        </div>

       


    </div>

    
  </div>
  )
}

export default Register
