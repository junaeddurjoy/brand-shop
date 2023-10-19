import { useLoaderData} from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "./ProductCard";

const BrandProducts = () => {
    
    const products = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl mt-14 font-pacifico font-bold mx-10">Products:</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 mb-14 mt-7 mx-10">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default BrandProducts;