import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CartCard from "./CartCard";
import { useState } from "react";

const Cart = () => {
    const loadedcart = useLoaderData();
    const [cart, setCart] = useState(loadedcart);

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-3xl mt-14 font-pacifico font-bold mx-10">Carts:</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-14 mt-7 mx-10">
                {
                    cart.map(product => 
                    <CartCard 
                    key={product._id} 
                    product={product}
                    cart={cart}
                    setCart={setCart}
                    >
                    </CartCard>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Cart;