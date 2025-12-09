import React from 'react';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const {signInUser} = useAuth();

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=> {
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin} className="fieldset">
                            <h1 className="text-5xl font-bold">Login now!</h1>

                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />

                            <p>Don't have an account? <Link to='/register' className='text-blue-600'>Register</Link></p>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;