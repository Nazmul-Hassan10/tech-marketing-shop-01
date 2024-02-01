import { Link, NavLink } from "react-router-dom";
import { RiMenu2Fill, RiSearchLine } from "react-icons/ri";
import { useState } from "react";
// import { VscAccount } from "react-icons/vsc";



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    return (
        <nav>
            <div className="max-w-screen-2xl mx-auto flex items-center py-4 text-secondaryText relative md:static">
                <div className="w-[35%]">
                    <Link to="/" className="text-xl sm:text-2xl font-bold">Tech & Marketing</Link>
                </div>
                <div className="flex items-center justify-between w-[65%]">
                    <div className={`absolute md:static top-20 bg-[#0B0E1A] md:bg-transparent rounded-lg md:rounded-none py-2 md:p-0 z-50 ${isMenuOpen ? "right-0 transform translate-y-0  opacity-100 duration-500" : "right-0 transform -translate-y-96 opacity-0 duration-500 "}`}>
                        <ul className="flex flex-col md:flex-row md:gap-5 my-14 md:my-0">
                            <li className="hover:bg-subBackground md:hover:bg-transparent px-16 py-3 md:p-0 rounded-md"><NavLink to={"/"} className={({ isActive }) =>
                                isActive ? "md:bg-subBackground px-3 py-2 rounded-xl" : "px-3 py-2"
                            }>Home</NavLink></li>
                            <li className="hover:bg-subBackground md:hover:bg-transparent px-16 py-3 md:p-0 rounded-md"><NavLink to={"/shop"} className={({ isActive }) =>
                                isActive ? "md:bg-subBackground px-3 py-2 rounded-xl" : "px-3 py-2"
                            }>Shop</NavLink></li>
                            <li className="hover:bg-subBackground md:hover:bg-transparent px-16 py-3 md:p-0 rounded-md"><NavLink to={"/products"} className={({ isActive }) =>
                                isActive ? "md:bg-subBackground px-3 py-2 rounded-xl" : "px-3 py-2"
                            }>Products</NavLink></li>
                            <li className="hover:bg-subBackground md:hover:bg-transparent px-16 py-3 md:p-0 rounded-md"><NavLink to={"/blog"} className={({ isActive }) =>
                                isActive ? "md:bg-subBackground px-3 py-2 rounded-xl" : "px-3 py-2"
                            }>Blog</NavLink></li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-between gap-16">
                        <div className="flex items-center flex-row-reverse md:flex-row gap-2 sm:gap-5">
                            <img className="rounded-full w-[30px] sm:w-[40px] outline outline-2 outline-secondaryText" src="https://source.unsplash.com/40x40/?profile" alt="profile" />
                            <div className='flex items-center group'>
                                <input
                                    className='py-2 px-3 flex w-[85%] border-2 outline-gray-400 focus:outline bg-[#f5f5f5] rounded-l-md text-black'
                                    type='text'
                                    placeholder='Search'
                                />
                                <button className='bg-subBackground border border-[#717171] rounded-r-md font-medium px-3 py-3 z-50 text-white'>
                                    <p className="group-hover:-rotate-[405deg] group-hover:text-rose-500 duration-500 text-xl">
                                        <RiSearchLine />
                                    </p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl md:hidden"><RiMenu2Fill /></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;