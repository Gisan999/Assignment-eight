import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="shadow-lg">
            <nav className="container mx-auto pl-16 md:pl-0">
                <div className="flex flex-col md:flex-row justify-between md:px-5 lg:px-0">
                    <div>
                        <img className="py-3" src="https://i.ibb.co/njFWFLK/Logo.png" />
                    </div>
                    <div className=" flex items-center pl-6 md:pl-0 py-5 md:py-0">
                        <ul className="flex gap-5">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donation"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                                    }
                                >
                                    Donation
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/statistics"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-red-500 underline font-bold" : ""
                                    }
                                >
                                    Statistics
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;