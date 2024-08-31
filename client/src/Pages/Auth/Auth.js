import React, { useState } from 'react'
import '../Auth/Auth.css'
import Logo from '../../img/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../../Actions/Authaction';
import { signUp } from '../../api/AuthRequest';


const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.authReducer.loading)

    const [isSignUp, setIsSignUp] = useState(false)


    const [data, setdata] = useState({ username: "", firstname: "", lastname: "", password: "", confirmpass: "" });

    const [confirmpassword, setconfirmpassword] = useState(true);

    const resetform = () => {
        setconfirmpassword(true);
        setdata({ username: "", firstname: "", lastname: "", password: "", confirmpass: "" })
    }

    const handlechange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    const handlesubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            data.password === data.confirmpass
                ? dispatch(signUp(data))
                : setconfirmpassword(false)
        } else {
            dispatch(logIn(data))
        };
        console.log({data})

    }

    return (
        <div className='Auth'>

            { /* left side*/}
            <div className='a-left'>
                <img src={Logo} alt='' />
                <div className='Webname'>
                    <h1>ZKC Media</h1>
                    <h6>Explore the idea throughout the world</h6>
                </div>

                {/* right side*/}
                <div className='a-right'>
                    <form className='infoForm authform' onSubmit={handlesubmit}>
                        <h3>{isSignUp ? "SignUp" : "Log In"}</h3>
                        {isSignUp &&
                            <div>
                                <input type='text'
                                    placeholder='First Name'
                                    className='infoInput'
                                    name="firstname"
                                    onChange={handlechange}
                                    value={data.firstname} />
                                <input type='text'
                                    placeholder='Last Name'
                                    className='infoInput'
                                    name='lastname'
                                    onChange={handlechange}
                                    value={data.lastname} />

                            </div>}

                        <div>
                            <input type='text'
                                placeholder='UserName'
                                className='infoInput'
                                name='username'
                                onChange={handlechange}
                                value={data.username} />

                        </div>
                        <div>
                            <input type='password'
                                placeholder='PassWord'
                                className='infoInput'
                                name='password'
                                onChange={handlechange}
                                value={data.password} />

                            {isSignUp &&
                                <input type='password'
                                    placeholder='Confirm Password'
                                    className='infoInput'
                                    name='confirmpass'
                                    onChange={handlechange}
                                    value={data.confirmpass} />
                            }

                        </div>
                        <span style={{ display: confirmpassword ? "none" : "block", color: "red", alignSelf: "flex-end", fontSize: "12px", marginRight: "5px" }}>
                            * Confirm password is not same
                        </span>
                        <div>
                            <span style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => { setIsSignUp((prev) => !prev); resetform() }}>
                                {isSignUp ? 'Already have an account. Login!' : "Don't have an account? SignUp"}
                            </span>
                        </div>
                        <button type='submit' className='Button info-Button' disabled={loading}>{loading ? "loading..." : isSignUp ? "SignUp" : "Log In"}</button>
                    </form>

                </div>
            </div>

        </div>
    )
};


export default Auth