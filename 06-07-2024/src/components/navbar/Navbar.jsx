import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3  text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link className=" hover:text-sm hover:text-gray-400" to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link className=" hover:text-sm hover:text-gray-400" to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link className=" hover:text-sm hover:text-gray-400" to={'/signup'}>Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li>
                <Link className=" hover:text-sm hover:text-gray-400" to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link className=" hover:text-sm hover:text-gray-400" to={'/user-dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link className=" hover:text-sm hover:text-gray-400" to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer hover:text-sm hover:text-gray-400" onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li>
                <Link className=" cursor-pointer hover:text-sm hover:text-gray-400"  to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="  sticky top-0 bg-gray-900 ">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" cursor-pointer hover:text-gray-400 font-bold text-white text-2xl text-center">E-Store</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
