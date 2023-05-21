import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';



const Login = () => {
    const { login, googleLogin, githubLogin } = useContext(AuthContext);
    const [error, setError] = useState('');

    // after login go to homepage or redirect to other page 
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.location?.pathname || '/';
    const goTo = () => {
        navigate(from, { replace: true });
    }

    // handle login button click and 
    // login user by email and password
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        //login user with email and password
        login(email, password)
            .then(() => {
                goTo();
            })
            .catch(err => {
                if (err.code === 'auth/wrong-password') {
                    setError('Email or Password do not match')
                }
                if(err.code === 'auth/user-not-found'){
                    setError('User not found !!!')
                }
            })
    }

    //handle google button click 
    // and login with google 
    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                goTo();
            })
            .catch(err => console.log(err))
    }

    // handle github button onClick
    // and login with github
    const handleGithubLogin = () => {
        githubLogin()
            .then(() => {
                goTo();
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="hero py-10 min-h-screen bg-[#C2E0EB]">
            <div className="hero-content flex-col ">
                <div className="text-center mb-5">
                    <h1 className="text-5xl font-extrabold">Login Here!</h1>
                </div>
                <div className="card  w-full max-w-full shadow-2xl bg-base-100">
                    <div className="card-body w-full">
                        <form onSubmit={handleLogin} >
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
                        <div className="divider text-sm text-slate-500">Or sign Up using</div>
                        <div className="flex justify-center items-center">
                            <button onClick={handleGoogleLogin} className="btn border-none btn-sm btn-outline btn-primary"><FcGoogle className='text-2xl me-2 ' /></button>
                            <button onClick={handleGithubLogin} className="btn  border-none btn-sm  btn-outline "><FaGithub className='text-2xl me-2' /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;