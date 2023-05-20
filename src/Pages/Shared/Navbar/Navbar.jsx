import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    // handle logout onClick 
    // and logout user 
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                        <li ><Link className="hover:bg-white font-semibold text-base  hover:text-[#F379A7]">Home</Link></li>
                        <li><Link to='/toys' className="hover:bg-white  font-semibold text-base hover:text-[#F379A7]">All Toys</Link></li>
                        {
                            user &&
                            <>
                                <li><Link className="hover:bg-white  font-semibold text-base hover:text-[#F379A7]">My Toys</Link></li>
                                <li><Link to='/toys/add' className="hover:bg-white  font-semibold text-base hover:text-[#F379A7]">Add a Toy</Link></li>
                            </>
                        }
                        <li><Link className="hover:bg-white  font-semibold text-base hover:text-[#F379A7]">Blogs</Link></li>
                    </ul>
                </div>

                <Link><img className="w-44" src="/src/assets/logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li ><Link className="hover:bg-white font-semibold text-base  hover:text-[#F379A7]">Home</Link></li>
                    <li><Link to='/toys'  className="hover:bg-white  font-semibold text-base hover:text-[#F379A7]">All Toys</Link></li>
                    {
                        user &&
                        <>
                            <li><Link className="hover:bg-white  font-semibold text-base hover:text-[#F379A7]">My Toys</Link></li>
                            <li><Link to='/toys/add' className="hover:bg-white  font-semibold text-base hover:text-[#F379A7]">Add a Toy</Link></li>
                        </>
                    }
                    <li><Link className="hover:bg-white  font-semibold text-base hover:text-[#F379A7]">Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown tooltip tooltip-bottom  me-2 dropdown-end" data-tip={user.displayName}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full " >
                                    <img src={user.photoURL ? user.photoURL : '/src/assets/user.png'} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Profile</a></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <Link to='/login' className="btn btn-md primary-btn ">Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;