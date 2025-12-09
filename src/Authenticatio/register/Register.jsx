import React from 'react';
import useAuth from '../../hooks/useAuth';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
const Register = () => {
    const { createUser } = useAuth()
    const navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result);
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo
                })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignUp} className="fieldset">

                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />

                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />

                            <label className="label">PhotoURL</label>
                            <input name='photo' type="url" className="input" placeholder="Image URL" />

                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />

                            <p className='text-sm'>Already have an account? <Link to='/login' className='text-blue-800 font-semibold'>Login</Link></p>
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;