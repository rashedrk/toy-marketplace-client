
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {

    return (
        <div>
            <div className="hero min-h-screen bg-[#C2E0EB]">
                <div className="hero-content flex-col ">
                    <div className="text-center mb-5">
                        <h1 className="text-5xl font-bold">Register Here!</h1>
                    </div>
                    <div className="card  w-full max-w-full shadow-2xl bg-base-100">
                        <form className="card-body w-full">
                            <div className='grid gap-3 grid-cols-2'>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required name='name' placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Enter Your Picture" className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" required name='confirmPassword' placeholder="Enter Your Password Again" className="input input-bordered" />
                            </div>
                            </div>
                            <div className="form-control ms-2 my-2">
                                <p className='text-sm text-red-600'></p>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn primary-btn">Register</button>
                                <label className='label'>
                                    <span><small>Already Have an Account? <Link className='link text-[#F379A7] '  to='/login'>Login Here</Link></small></span>
                                </label>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;