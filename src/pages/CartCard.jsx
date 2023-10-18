
import PropTypes from 'prop-types';
import { AiFillStar, AiFillDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
const CartCard = ({ product, cart, setCart }) => {
    const { _id, name, image, brand, type, price, rating, description } = product;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = cart.filter(citem => citem._id != _id)
                            setCart(remaining);
                        }
                    })

            }
        })
    }
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img className='h-96 w-96' src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-3xl">{name}</h2>
                    <p><span className="font-bold">Brand:</span> {brand}</p>
                    <p><span className="font-bold">Device Type:</span> {type}</p>
                    <p><span className="font-bold">Price:</span> {price}$</p>
                    <p className='flex items-center'><span className="font-bold">Rating:</span> {rating}<AiFillStar className='text-yellow-600'></AiFillStar></p>
                    <p><span className="font-bold">Description:</span> {description}</p>
                    <div className="btn-group btn-group-vertical lg:btn-group-horizontal justify-center">
                        <button onClick={() => handleDelete(_id)} className="w-80 btn bg-red-600 text-white hover:text-black">Delete<AiFillDelete className='text-2xl'></AiFillDelete> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
CartCard.propTypes = {
    product: PropTypes.string.isRequired,
    cart: PropTypes.string.isRequired,
    setCart: PropTypes.string.isRequired,
};
export default CartCard;