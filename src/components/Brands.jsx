
const Brands = () => {
    return (
        <div>
            <h1 className="text-4xl font-exo text-center mt-14 mb-5 font-bold">Our Available Product Brands</h1>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-5 items-center mx-24 lg:mx-16 mb-16">
                <div className="h-36 w-56">
                    <img className="h-32" src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png" alt="" />
                    <h2 className="text-xl font-bold text-center">Apple</h2>
                </div>
                <div className="h-36 w-56">
                    <img className="h-32" src="data:image/png;base64,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" alt="" />
                    <h2 className="text-xl font-bold text-center">SamSung</h2>
                </div>
                <div className="h-36 w-56">
                    <img className="h-32" src="https://pngimg.com/d/sony_logo_PNG2.png" alt="" />
                    <h2 className="text-xl font-bold text-center">Sony</h2>
                </div>
                <div className="h-36 w-56">
                    <img className="h-32" src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png" alt="" />
                    <h2 className="text-xl font-bold text-center">Google</h2>
                </div>
                <div className="h-36 w-56">
                    <img className="h-32" src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg" alt="" />
                    <h2 className="text-xl font-bold text-center">Microsoft</h2>
                </div>
                <div className="h-36 w-56">
                    <img className="h-32" src="https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png" alt="" />
                    <h2 className="text-xl font-bold text-center">Asus</h2>
                </div>
            </div>
        </div>
    );
};

export default Brands;