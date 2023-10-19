import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { AuthContext } from './provider/AuthProvider';

const SignUp = () => {
    const [regError, setregError] = useState('');
    const [regSuccess, setregSuccess] = useState('');
    const {createUser} = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name= form.get('username');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name,email,password)
        setregError('')
        setregSuccess('')

        if(password.length<6){
            setregError('Password should be at least 6 characters.')
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setregError('Password should contain at least 1 upper case letter.')
            return;
        }
        else if(!/[^A-Za-z0-9]/.test(password)){
            setregError('Password should contain at least 1 special character.')
            return;
        }

        createUser(email,password,name)
        .then(result => {
            console.log(result.user)
            setregSuccess("User Created")
        })
        .catch(error => {
            console.error(error)
            setregError(error.message);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-5xl font-bold -mb-20 mt-20 text-center">Sign Up Now!</h1>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 p-10">
                        <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='username' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to={'/login'}>
                                        <a href="#" className="label-text-alt link link-hover text-md font-semibold">Already Registered?</a>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control  mt-3">
                                <button className="btn bg-black text-white hover:text-black ">Register</button>
                            </div>
                        </form>
                        {
                            regError && <p className='text-red-700'>{regError}</p>
                        }
                        {
                            regSuccess && <p className='text-green-700'>{regSuccess}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;