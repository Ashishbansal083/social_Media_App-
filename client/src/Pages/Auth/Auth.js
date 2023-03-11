import React, { useState } from 'react'
import '../Auth/Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {

    const [isSignUp,setIsSignUp]=useState(false)
  return (
    <div className='Auth'>

       { /* left side*/}
        <div className='a-left'>
            <img src={Logo} alt=''/>            
            <div className='Webname'>
                <h1>ZKC Media</h1>
                <h6>Explore the idea throughout the world</h6>
            </div>

            {/* right side*/}
            <div className='a-right'>
            <form className='infoForm authform'>
                <h3>{isSignUp?"SignUp":"Log In"}</h3>
                {isSignUp && 
                <div>
                    <input type='text' 
                    placeholder='First Name' 
                    className='infoInput' 
                    name='firstname' >
                    </input>
                    <input type='text' 
                    placeholder='Last Name' 
                    className='infoInput' 
                    name='lastname' >
                    </input>
                </div>}
                
                <div>
                <input type='text' 
                    placeholder='UserName' 
                    className='infoInput' 
                    name='username' >
                    </input>
                </div>
                <div>
                    <input type='text' 
                    placeholder='PassWord' 
                    className='infoInput' 
                    name='password' >
                    </input>
                    {isSignUp && 
                    <input type='text' 
                    placeholder='Confirm Password' 
                    className='infoInput' 
                    name='confirmpass' >
                    </input>}
                    
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already have an account . LogIn!</span>
                </div>
                <button type='Submit' className='Button info-Button'>{isSignUp?"SignUp":"Log In"}</button>
            </form>
         </div>
        </div>
                     
    </div>
  )
};
 

export default Auth