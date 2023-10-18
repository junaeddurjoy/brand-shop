import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const {_id, name, image, brand, type, price, rating, description } = product;

    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className='h-96 w-96' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><span className="font-bold">Brand:</span> {brand}</p>
                    <p><span className="font-bold">Device Type:</span> {type}</p>
                    <p><span className="font-bold">Price:</span> {price}$</p>
                    <p className='flex items-center'><span className="font-bold">Rating:</span> {rating}<AiFillStar className='text-yellow-600'></AiFillStar></p>

                    <p><span className="font-bold">Description:</span> {description}</p>
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal justify-center">
                        <Link to={'/addCart'}>
                            <button className="btn bg-green-400">Details</button>
                        </Link>
                        <Link to={'/addCart'}>
                            <button className="btn bg-yellow-300">Add To Cart</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="btn bg-red-400">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;