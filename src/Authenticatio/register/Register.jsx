import React from 'react';

const Register = () => {

    const handleSignUp = e => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        console.log(formData);
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

                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;