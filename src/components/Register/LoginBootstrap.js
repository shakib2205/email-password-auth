import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase-init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] =useState('');
    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
        })
        .catch(error => {
            console.log('error: ', error)
        })
    }

    //FORGET PASSWORD
    const handleEmailBlur = event =>{
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handleForgetPassword = () => {
        if(!userEmail){
            alert('please enter your email')
            return;
        }
        sendPasswordResetEmail(auth, userEmail)
        .then ( () => {
            alert('Password reset email send, Please check you email');
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email Address</label>
                    <input onClick={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your Password" required />
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
            {success && <p>Successfully Login</p>}
            <p><small>New to this webSite ? please <Link to ='/register'>Register</Link></small></p>
            <p><small><button type="button" onClick={handleForgetPassword} className="btn btn-link">Forget Password</button></small></p>
        </div>
    );
};

export default LoginBootstrap;