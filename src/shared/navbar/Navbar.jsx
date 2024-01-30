import { Link, NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
// import { VscAccount } from "react-icons/vsc";



const Navbar = () => {
    return (
        <nav>
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-4">
                <div>
                    <Link>Tech & Marketing</Link>
                </div>
                <div>
                    <ul className="flex gap-5">
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Shop</NavLink></li>
                        <li><NavLink>Products</NavLink></li>
                        <li><NavLink>Blog</NavLink></li>
                    </ul>
                </div>
                <div className="flex items-center gap-5">
                    <img className="rounded-full w-[40px] outline outline-2 outline-secondaryText" src="https://source.unsplash.com/40x40/?profile" alt="profile" />
                    <div className='flex items-center group'>
                        <input
                            className='py-2 px-3 flex w-[85%] border-2 outline-gray-400 focus:outline bg-[#f5f5f5] rounded-l-md text-black'
                            type='email'
                            placeholder='Enter Email'
                        />
                        <button className='bg-[#717171] border border-[#717171] rounded-r-md font-medium px-3 py-3 z-50 text-white'>
                            <p className="group-hover:-rotate-[405deg] group-hover:text-rose-500 duration-500 text-xl">
                                <RiSearchLine />
                            </p>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;