
const Banner = () => {
    return (
        <div>
            <div className="hero h-[400px] mx-auto" style={{ backgroundImage: 'url(https://bkwebdesigns.com/wp-content/uploads/2020/11/Top-website-design-company-banner-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Your Ultimate IT Shop</h1>
                        <p className="mb-5">Start shopping with us and get your favorite PC, Laptop, Phone, Camera, Consoles and many more...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;