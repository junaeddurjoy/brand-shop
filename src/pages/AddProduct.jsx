import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Swal from 'sweetalert2'

// private
const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newProduct = { name, image, brand, type, price, rating, description };
        console.log(newProduct)
        fetch('https://brand-shop-server-atkekrzmu-junaeds-projects.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully',
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
                <h1 className="text-6xl ">Add Product</h1>
                <form onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-32 justify-around">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" name="name" placeholder="product name..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Image</span>
                            </label>
                            <label className="input-group">
                                <span>Image</span>
                                <input type="text" name="image" placeholder="image url..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Brand</span>
                            </label>
                            <label className="input-group">
                                <span>Brand</span>
                                <input type="text" name="brand" placeholder="brand name..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Type</span>
                            </label>
                            <label className="input-group">
                                <span>Type</span>
                                <select name="type" className="select select-bordered">
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
                                <input type="text" name="price" placeholder="product price..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Rating</span>
                            </label>
                            <label className="input-group">
                                <span>Rating</span>
                                <input type="text" name="rating" placeholder="product rating..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-xl">Description</span>
                            </label>
                            <label className="input-group">
                                <span>Description</span>
                                <input type="text" name="description" placeholder="short description..." className="input input-bordered" />
                            </label>
                        </div>
                        <button  type="submit" className=" bg-slate-700 hover:bg-slate-500 p-5 mt-5 text-white rounded-lg">Add Product</button>
                    </div>
                        
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;