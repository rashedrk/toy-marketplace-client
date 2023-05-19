import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState('')
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log( email,  password);
    }
    return (
        <div className="hero py-10 min-h-screen bg-[#C2E0EB]">
            <div className="hero-content flex-col ">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-extrabold">Login Here!</h1>
                </div>
                <div className="card  w-full max-w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body w-full">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name='email' placeholder="Enter Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='password' placeholder="Enter Your Password" className="input input-bordered" />
                            </div>
                        
                        <div className="form-control ms-2 my-2">
                            <p className='text-sm text-red-600'>{error}</p>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn primary-btn">Login</button>
                            <label className='label'>
                                <span><small>Do not Have an Account? <Link className='link text-[#F379A7] ' to='/register'>Register Here</Link></small></span>
                            </label>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;