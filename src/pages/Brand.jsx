import { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const Brand = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        fetch('brands.json')
            .then(res => res.json())
            .then(data => setBrand(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-6 gap-5 items-center mx-24 lg:mx-16 mb-16">
                {
                    brand.map(brand => <div key={brand.id}>
                        <div>
                            <div className="h-36 w-56">
                                <Link to={`/brandproducts/${brand.name}`}>
                                    <img className="h-32" src={brand.image} alt="" />
                                    <h2 className="text-xl font-bold text-center">{brand.name}</h2>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Brand;