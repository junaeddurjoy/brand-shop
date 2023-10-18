import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const ProductCard = ({ product }) => {
    const {_id, name, image} = product;

    return (
        <div>
            <div className="card w-96 glass">
            <h2 className="card-title justify-center mt-3">{name}</h2>
                <figure><img className='h-96 w-96' src={image} alt="car!" /></figure>
                <div className="card-body">
                    
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal justify-center">
                        <Link to={`/product/${_id}`}>
                            <button className="btn bg-green-400">Details</button>
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
ProductCard.propTypes = {
    product: PropTypes.string.isRequired,
};
export default ProductCard;