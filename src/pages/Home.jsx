import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BsPhone, BsLaptop, BsCameraReels } from 'react-icons/bs'
import { HiOutlineComputerDesktop } from 'react-icons/hi2'
import Brand from "./Brand";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                <section className='hover:bg-zinc-400 py-16 mx-20 my-16'>
                    <div>
                        <h1 className='text-3xl text-center'>Featured Category</h1>
                        <h3 className='text-xl text-center'>Get Your Desired Product from Featured Category!</h3>
                        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 w-2/3 mx-auto my-5'>
                            <div className='text-center'>
                                <BsPhone className='text-8xl  mx-auto'></BsPhone>
                                <p>Phone</p>
                            </div>
                            <div className='text-center'>
                                <HiOutlineComputerDesktop className='text-8xl mx-auto '></HiOutlineComputerDesktop>
                                <p>Desktop Computer</p>
                            </div>
                            <div className='text-center'>
                                <BsLaptop className='text-8xl  mx-auto'></BsLaptop>
                                <p>Laptop</p>
                            </div>
                            <div className='text-center'>
                                <BsCameraReels className='text-8xl  mx-auto'></BsCameraReels>
                                <p>Camera</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Brands */}
                <h1 className="text-4xl font-exo text-center mt-14 mb-5 font-bold">Our Available Product Brands</h1>
               <Brand></Brand>
                <section>
                    <div className='mt-32 mx-16'>
                        <div className='bg-gradient-to-r from-gray-300 to-gray-200 py-5'>
                            <h3 className='text-center font-pacifico text-2xl'>Our Most Selling Products Of The Month</h3>
                            <p className='text-center font-pacifico text-md mt-2 '>Customer have the most demand on these product and we have enough supply to fullfill the needs of the customers.</p>

                        </div>
                        <div className='grid grid-cols-2 items-center mb-5'>
                            <div>
                                <img className='h-3/4 w-3/4 mx-auto' src="https://static.toiimg.com/thumb/msid-103868589,width-1280,height-720,resizemode-4/103868589.jpg" />
                                <p className='text-center font-bold font-pacifico'>Iphone 15</p>
                            </div>
                            <div>
                                <img className='h-3/4 w-3/4 mx-auto' src="https://www.asus.com/media/global/gallery/z3mgskpdfngng6xn_setting_xxx_0_90_end_2000.png" />
                                <p className='text-center font-bold font-pacifico'>Asus Tuf Gaming A17</p>
                            </div>
                            <div>
                                <img className='h-3/4 w-3/4 mx-auto' src="https://www.bdstall.com/asset/product-image/giant_204875.jpg" />
                                <p className='text-center font-bold font-pacifico'>Sony Alpha 7 iii</p>
                            </div>
                            <div>
                                <img className='h-3/4 w-3/4 mx-auto' src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/10/Fep-Mm9akAE-0Ip-photoutils.com_.jpeg?ssl=1" />
                                <p className='text-center font-bold font-pacifico'>SamSung Galaxy S23 Ultra</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;