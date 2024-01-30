import { RiMailSendLine, RiSendPlane2Line } from "react-icons/ri";
import { VscCallOutgoing } from "react-icons/vsc";


const Footer = () => {
    return (
        <footer>
            <div className="flex flex-col md:flex-row flex-wrap justify-between max-w-[1410px] mx-auto pt-32 pb-20 text-lg text-[#717171]">
                <div className="px-3">
                    <h2 className="text-2xl font-semibold mb-6 text-black">Contact Us</h2>
                    <div className="py-2 leading-8">
                        <p>Become a premium member and get 20% <br /> off your next purchase!</p>
                        <div>
                            <div className="flex items-center gap-3 group">
                                <p className="text-6xl group-hover:rotate-[25deg] duration-300 group-hover:text-rose-500"><VscCallOutgoing /></p>
                                <div>
                                    <p>Call</p>
                                    <p className="text-black">+0884565***</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <p className="text-6xl group-hover:-rotate-[25deg] duration-300 group-hover:text-rose-500"><RiMailSendLine /></p>
                                <div>
                                    <p>Email</p>
                                    <p className="text-black">discord0nazmulhassan@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="text-2xl font-semibold mb-6 text-black">Store</h2>
                    <div className="py-2 leading-8">
                        <div>Trending Now</div>
                        <div>Best Seller</div>
                        <div>Discount Items</div>
                        <div>New Release</div>
                        <div>Out Of Stock</div>
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="text-2xl font-semibold mb-6 text-black">Information</h2>
                    <div className="py-2 leading-8">
                        <div>About Us</div>
                        <div>Delivery Information</div>
                        <div>Terms & Conditions</div>
                        <div>Privacy Policy</div>
                        <div>Sales Information</div>
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="text-2xl font-semibold mb-6 text-black">Account</h2>
                    <div className="py-2 leading-8">
                        <div>My Account</div>
                        <div>My Orders</div>
                        <div>My Wishlist</div>
                        <div>Return Policy</div>
                        <div>Order Tracking</div>
                    </div>
                </div>
                <div className="px-3">
                    <h2 className="text-2xl font-semibold mb-6 text-black">Subscribe Newsletter</h2>
                    <div className="py-2 leading-8">
                        <p>Become a premium member and get 20% <br /> off your next purchase!</p>
                        <div>
                            <div className='flex items-center w-full group'>
                                <input
                                    className='py-2 px-3 flex w-[65%] border-2 outline-gray-400 focus:outline bg-[#f5f5f5] rounded-l-md text-black'
                                    type='email'
                                    placeholder='Enter Email'
                                />
                                <button className='bg-[#717171] border border-[#717171] rounded-r-md font-medium px-3 py-4 z-50 text-white'>
                                    <p className="group-hover:-rotate-[405deg] group-hover:text-rose-500 duration-500 text-xl">
                                        <RiSendPlane2Line />
                                    </p>
                                </button>
                            </div>
                            <p>
                                We care bout the protection of your data. Read our{' '}
                                <span className='text-rose-500'>Privacy Policy.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;