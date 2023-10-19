/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const Login = () => {

    const [user,setUser] = useState(null);

    const [loginError, setloginError] = useState('')
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const loggedinuser= result.user;
            console.log(loggedinuser);
            setUser(loggedinuser)
        })
        .catch(error => {
            console.log('error',error.message )
        })
    }

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        setloginError('');
        signIn(email,password)
        .then(result => {
            navigate(location?.state? location.state: '/')
        })
        .catch(error =>{
            setloginError(error.message)
        })
    }
    return (
        <div>
            <Navbar ></Navbar>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ">
                        <h1 className="text-5xl font-bold ">Login now!</h1>
                        <p className="py-6">To explore more and more of tech products You need to login first.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-300 p-11">
                        <form onSubmit={handleLogin}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <Link to={'/signup'}>
                                        <a className="label-text-alt link link-hover text-sm font-semibold">Not registered?</a>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type="submit" className="btn btn-primary bg-black hover:bg-white hover:text-black">Login</button>
                            </div>
                            <div className="form-control mt-3">
                                <button onClick={handleGoogleSignIn} className="btn btn-primary bg-white text-black hover:bg-white hover:text-black">Login With Google <FcGoogle className="text-2xl font-bold"></FcGoogle></button>
                            </div>
                        </form>
                        {
                            loginError && <p className='text-red-500'>{loginError}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;