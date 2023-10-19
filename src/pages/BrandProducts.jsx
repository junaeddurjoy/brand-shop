import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "./ProductCard";
import dummyData from '../../public/brands.json'

const BrandProducts = () => {
    const products = useLoaderData();
    let bname = products[0].brand;
    let foundObject = dummyData.find(obj => obj.name === bname);

    if (foundObject) {
        console.log('hehhe mama paisi', foundObject);
    }
    const { image1, image2, image3, image4 } = foundObject;
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-4xl font-bold font-pacifico text-center">{bname}</h1>
                <div className="carousel h-[30rem] w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={image1} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={image2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={image3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={image4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
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