import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AddProduct = () => {
    return (
        <div className="font-pacifico">
            <Navbar></Navbar>
            <div className="py-10 lg:py-5 lg:my-20 lg:mx-32 lg:p-8 bg-gray-300 text-center">
                <h1 className="text-6xl ">Add Product</h1>
                <form>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:ml-32 justify-around">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <label className="input-group">
                                <span>Name</span>
                                <input type="text" placeholder="product name..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Image</span>
                            </label>
                            <label className="input-group">
                                <span>Image</span>
                                <input type="email" placeholder="image url..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Brand</span>
                            </label>
                            <label className="input-group">
                                <span>Brand</span>
                                <input type="email" placeholder="brand name..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Type</span>
                            </label>
                            <label className="input-group">
                                <span>Type</span>
                                <select className="select select-bordered">
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
                                <input type="email" placeholder="product price..." className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Rating</span>
                            </label>
                            <label className="input-group">
                                <span>Rating</span>
                                <input type="email" placeholder="product rating..." className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                    <div className="p-5 mt-5 bg-slate-700 text-white rounded-lg">
                        <button type="submit" className="">Add Product</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;