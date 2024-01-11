import React, { useState } from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [icon, setIcon] = useState(eyeOff);
    const [type, setType] = useState('password')

    const submit = (event) => {
        event.preventDefault();
        alert("Username : "+username+""+"\n"+"Password : "+password)
    }

    const toggle = () => {
        if(type=='password'){
            setIcon(eye);
            setType('text')
        }
        else{
            setIcon(eyeOff)
            setType('password')
        }
    }

    return (
        <div>
            <div className='wrapper'>
                <form action=''>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <input
                            type='text'
                            placeholder='Username'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            required>
                        </input>

                        <FaUser className='icon' />
                    </div>

                    <div className='input-box'>
                        <input
                            type={type}
                            placeholder='Password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required>
                        </input>

                        <Icon className='icon' icon={icon} onClick={toggle} />
                    </div>

                    <div className='remember-forgot'>
                        <label>
                            <input type='checkbox' />Remember Me</label>
                        <a href='#'>Forgot password?</a>
                    </div>

                    <button 
                        type='submit'onClick={submit} >Login</button>

                    <div className='registration-link'>
                        <p
                            style={{ marginTop: '7px' }}>
                            Don't have an account?
                            <a href='#'>Register</a>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginForm
