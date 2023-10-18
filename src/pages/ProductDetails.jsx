import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useLoaderData } from "react-router-dom";
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const ProductDetails = () => {
    const product = useLoaderData();
    const { name, image, brand, type, price, rating, description } = product;
    return (
        <div>
            <Navbar></Navbar>

            <div className="card  glass shadow-none grid grid-cols-2">
                <div>
                    <figure><img className='h-96 w-96' src={image} alt="car!" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <p><span className="font-bold">Brand:</span> {brand}</p>
                    <p><span className="font-bold">Device Type:</span> {type}</p>
                    <p><span className="font-bold">Price:</span> {price}$</p>
                    <p className='flex items-center'><span className="font-bold">Rating:</span> {rating}<AiFillStar className='text-yellow-600'></AiFillStar></p>

                    <p><span className="font-bold">Description:</span> {description}</p>
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal ">
                        <Link to={'/addCart'}>
                            <button className="btn bg-yellow-300">Add To Cart <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart></button>

                        </Link>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ProductDetails;