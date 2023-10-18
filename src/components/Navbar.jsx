import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="flex-1">
                    <img className="h-min w-20" src="https://i.ibb.co/0cHr0db/302-3026083-computer-graphic-design-logo-removebg-preview.png" alt="" />
                    <Link to={'/'}>
                        <a className="btn btn-ghost normal-case text-2xl font-varela">IT Haatt</a>
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 justify-center items-center lg:gap-5 mx-3 text-md font-bold">
                    <Link to={'/'}>
                        <div className="hover:bg-gray-300 lg:p-3 w-auto text-center rounded-full">
                            Home
                        </div>

                    </Link>
                    <Link to={'/addProduct'}>
                        <div className="hover:bg-gray-300 lg:p-3 w-auto text-center  rounded-full">
                            Add Product
                        </div>
                    </Link>
                    <Link to={'/cart'}>
                        <div className="hover:bg-gray-300 lg:p-3 w-auto text-center  rounded-full">
                            Cart
                        </div>
                    </Link>
                    <Link to={'/addProduct'}>
                        <div className="hover:bg-gray-300 lg:p-3 w-auto text-center  rounded-full">
                            Log In
                        </div>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Navbar;