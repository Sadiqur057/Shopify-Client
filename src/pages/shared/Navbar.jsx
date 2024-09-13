import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/login')
      })
      .catch(error => console.log(error))
  }
  const activeStyles =
    "text-gray-200 hover:text-primary";
  const inactiveStyles =
    "text-gray-400 hover:text-primary";

  const navList = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        Home
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      >
        Shop
      </NavLink>
      {
        loading && <p className="text-gray-300">Loading..</p>
      }
      {
        user && <button onClick={handleLogout} className="hover:bg-secondary bg-primary text-gray-100 px-5 py-2 rounded-3xl">Logout</button>
      }
      {
        !user && !loading && <Link to='/login'><button className="bg-primary hover:bg-secondary  text-gray-100 px-5 py-2 rounded-3xl">Login</button></Link>
      }
    </>
  );

  return (
    <nav className="relative bg-dark h-16 flex">
      <div className="py-4 max-w-7xl w-[90%] md:w-4/5 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between w-full">
          <Link to="/">
            <h2 className="text-white font-semibold text-xl">ShopiFy</h2>
          </Link>
          <div className="md:flex gap-6 hidden items-center">{navList}</div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white text-3xl"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <IoMenu/>
              ) : (
                <IoClose/>
              )}
            </button>
          </div>
        </div>


        <div className="md:hidden block">
          <div
            className={`absolute inset-x-0 z-20 mt-4 w-full px-4 py-4 transition-all duration-300 ease-in-out bg-dark flex flex-col gap-3 ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
              }`}
          >
              {navList}

            <div className="flex justify-center md:block">
              <button
                className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600"
                
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-primary rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;