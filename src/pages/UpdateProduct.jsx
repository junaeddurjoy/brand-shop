import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, name, image, brand, type, price, rating, description } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updatedProduct = { name, image, brand, type, price, rating, description };
        console.log(updatedProduct)
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div className="font-pacifico">
            <Navbar></Navbar>
            <div className="py-10 lg:py-5 lg:my-20 lg:mx-32 lg:p-8 bg-gray-300 text-center">
                <h1 className="text-6xl ">Update Product</h1>
                <form onSubmit={handleUpdateProduct}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-32 justify-around">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="name" defaultValue={name} placeholder="product name..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Image</span>
                            </label>
                            <label className="input-group">
                                <span>Image</span>
                                <input type="text" name="image" defaultValue={image} placeholder="image url..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Brand</span>
                            </label>
                            <label className="input-group">
                                <span>Brand</span>
                                <input type="text" name="brand" defaultValue={brand} placeholder="brand name..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Type</span>
                            </label>
                            <label className="input-group">
                                <span>Type</span>
                                <select name="type" defaultValue={type} className="select select-bordered">
                                    <option disabled selected>Pick category</option>
                                    <option>Desktop</option>
                                    <option>Phone</option>
                                    <option>Camera</option>
                                    <option>Laptop</option>
                                </select>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Price</span>
                            </label>
                            <label className="input-group">
                                <span>Price</span>
                                <input type="text" name="price" defaultValue={price} placeholder="product price..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Rating</span>
                            </label>
                            <label className="input-group">
                                <span>Rating</span>
                                <input type="text" name="rating" defaultValue={rating} placeholder="product rating..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl">Description</span>
                            </label>
                            <label className="input-group">
                                <span>Description</span>
                                <input type="text" name="description" defaultValue={description} placeholder="short description..." className="input input-bordered" />
                            </label>
                        </div>
                        <button type="submit" className=" bg-slate-700 hover:bg-slate-500 p-5 mt-5 text-white rounded-lg">Update Product</button>
                    </div>

                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProduct;