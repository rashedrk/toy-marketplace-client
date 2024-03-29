
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
const Register = () => {
    const {signUp, updateUser} = useContext(AuthContext);

    //show error msg
    const [error, setError] = useState('');
    //navigation after register
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        //checking for pass and confirm pass match
        if (password !== confirmPassword) {
            return setError('Password and Confirm Password do not match')
        }
        
        // sign up with email and password
        signUp(email,password)
        .then(() => {
            updateUser(name,photo)
            .then(()=>{})
            .catch(err => console.log(err));
            navigate('/login') //navigation to login page after register
        })
        .catch(err => console.log(err));
    }
    return (
            <div className="hero py-10 min-h-screen bg-[#C2E0EB]">
                <div className="hero-content flex-col ">
                    <div className="text-center mb-5">
                        <h1 className="text-5xl font-extrabold">Register Here!</h1>
                    </div>
                    <div className="card  w-full max-w-full shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body w-full">
                            <div className='grid gap-3 grid-cols-2'>
                                <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  name='name' placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Enter Your Picture" className="input input-bordered" />
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
                                <p className='text-sm text-red-600'>{error}</p>
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
    );
};

export default Register;