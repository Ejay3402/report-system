import React, { useState } from 'react';
import { student } from '../data/students';
import { BiError } from 'react-icons/bi';

import './../styles/loginform.scss';


const LoginForm = ({ onLogin }) => {

    const [ regNum , setRegNum] = useState(``);
    const [ password , setPassword] = useState(``);
    const [ err , setErr] = useState(``);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErr(``);

        const found = student.find(s => s.regNo === regNum);
        if (!found) {
            setErr(`You're not a registered student.`);
            return () => {
                setTimeout(() => {
                    setErr(``);
                }, 2000);
            }
        }

        if (found.passeword !== password) {
            setErr(`Incorrect password.`);
            return;
        }

        onLogin(found);

    }

  return (
    <div className='login-form'>
        <div className="form-m">
            <h2>Student Login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="reg">Registration Number</label>
            <input required type="text" name='reg' value={regNum} onChange={e=> setRegNum(e.target.value)} placeholder='Username'/>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />

            {err && <div className="err"><BiError/>{` ${err}`}</div>}

            <button type='submit'>Log in</button>

        </form>
        </div>
    </div>
  )
}

export default LoginForm