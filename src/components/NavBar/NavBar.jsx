import { useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const NavBar = () => {

    const [open,setOpen]=useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/', exact: true },
        { id: 2, name: 'About', path: '/about', exact: true },
        { id: 3, name: 'Services', path: '/services', exact: true },
        { id: 4, name: 'Contact', path: '/contact', exact: true },
        { id: 5, name: 'NotFound', path: '*' },
      ];
      


    return (
        <nav className="md:bg-black">
           <div className="md:hidden text-3xl m-3" onClick={()=>setOpen(!open)}>
            {
                open===true ? <IoClose /> : <HiOutlineMenuAlt1 />
            }
           </div>
            <ul className={`md:flex md:static  bg-black lg:text-xl absolute duration-1000 p-6 rounded-xl ml-3 ${open? 'top-10': '-top-60'} text-white `}>
            {
                routes.map(route=> <Link key={route.id} route={route} ></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;