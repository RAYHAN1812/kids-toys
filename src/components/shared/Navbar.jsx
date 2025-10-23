import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => toast.success("Logged out successfully!"))
            .catch(error => toast.error(error.message));
    };

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "bg-secondary text-white rounded-lg px-3 py-1" : "hover:bg-secondary/70 rounded-lg px-3 py-1 transition"}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/profile"
                    className={({ isActive }) => isActive ? "bg-secondary text-white rounded-lg px-3 py-1" : "hover:bg-secondary/70 rounded-lg px-3 py-1 transition"}
                >
                    My Profile
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/secret-base"
                    className={({ isActive }) => isActive ? "bg-secondary text-white rounded-lg px-3 py-1" : "hover:bg-secondary/70 rounded-lg px-3 py-1 transition"}
                >
                    Dashboard
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-primary text-primary-content sticky top-0 z-50 shadow-lg px-4 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars className="text-xl" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base-content"
                    >
                        {navLinks}
                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-2xl font-extrabold normal-case hover:text-secondary transition">
                    ToyTopia
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                {loading ? (
                    <span className="loading loading-spinner"></span>
                ) : user ? (
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar tooltip tooltip-left"
                            data-tip={user.displayName || 'User'}
                        >
                            <div className="w-10 rounded-full">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover rounded-full" />
                                ) : (
                                    <FaUserCircle className="w-10 h-10 text-gray-200" />
                                )}
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <NavLink to="/profile" className="hover:bg-secondary/50 rounded-lg px-2 py-1">
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <a onClick={handleLogout} className="hover:bg-red-500/70 text-red-600 rounded-lg px-2 py-1 flex items-center gap-2">
                                    <FaSignOutAlt /> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <NavLink
                        to="/login"
                        className="btn bg-secondary text-white hover:bg-secondary/80 transition"
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
