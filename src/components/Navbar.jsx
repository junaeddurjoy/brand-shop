import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../pages/provider/AuthProvider";
// import { BiUserCircle } from 'react-icons/ai'
import { RiLogoutBoxRFill, RiLogoutBoxFill } from 'react-icons/ri'

import { AiOutlineShopping } from 'react-icons/ai'
import { FaShoppingCart } from 'react-icons/fa'
import { FcHome, FcAddDatabase } from 'react-icons/fc'


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    console.log('this is user',user);
    // eslint-disable-next-line no-unused-vars
    const handleSignOut = e => {
        logout()
            .then()
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <img className="h-min w-20" src="https://i.ibb.co/0cHr0db/302-3026083-computer-graphic-design-logo-removebg-preview.png" alt="" />
                    <Link to={'/'}>
                        <a className="btn btn-ghost normal-case text-2xl font-varela">IT Haatt</a>
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-0 justify-center items-center  mx-3 text-md font-bold">
                    <Link to={'/'}>
                        <div className="hover:bg-gray-300 lg:p-3 flex items-center gap-2  w-auto text-center rounded-full">
                            Home<FcHome className="text-xl"></FcHome>
                        </div>

                    </Link>
                    <Link to={'/addProduct'}>
                        <div className="hover:bg-gray-300 lg:p-3 flex items-center w-auto text-center  rounded-full">
                            Add Product<FcAddDatabase className="text-xl"></FcAddDatabase>
                        </div>
                    </Link>
                    <Link to={'/cart'}>
                        <div className="hover:bg-gray-300 lg:p-3 w-auto text-center flex items-center  rounded-full">
                            Cart<FaShoppingCart className="text-xl text-orange-500"></FaShoppingCart>
                        </div>
                    </Link>
                    <Link to={'/products'}>
                        <div className="hover:bg-gray-300 lg:p-3 w-auto text-center flex items-center rounded-full">
                            All Products<AiOutlineShopping className="text-xl text-purple-400"></AiOutlineShopping>
                        </div>
                    </Link>
                    {
                            user ?
                                <button onClick={handleSignOut} className='hover:bg-gray-300 lg:p-3 w-auto text-center flex items-center rounded-full'>Log Out<RiLogoutBoxRFill className="text-xl"></RiLogoutBoxRFill></button>
                                :
                                <Link to={'/login'}>
                                    <button className='hover:bg-gray-300 lg:p-3 w-auto text-center flex items-center rounded-full'>Login<RiLogoutBoxFill></RiLogoutBoxFill></button>
                                </Link>
                        }
                </div>
            </div>
        </div>

    );
};

export default Navbar;