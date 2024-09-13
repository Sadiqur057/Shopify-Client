import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, Link, NavLink } from "react-router-dom";
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
    "text-gray-200 hover:text-blue-500";
  const inactiveStyles =
    "text-gray-400 hover:text-blue-500";

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
        user && <button onClick={handleLogout} className="bg-blue-600 hover:bg-blue-500 text-gray-100 px-5 py-2 rounded-3xl">Logout</button>
      }
      {
        !user && !loading && <Link to='/login'><button className="bg-blue-600 hover:bg-blue-500  text-gray-100 px-5 py-2 rounded-3xl">Login</button></Link>
      }
    </>
  );

  return (
    // <div className="bg-secondary h-16 flex px-4 sm:px-10 justify-between items-center">
    //   <Link to="/">
    //     <h2 className="text-white font-semibold text-xl">ShopiFy</h2>
    //   </Link>
    //   <div className="flex">
    //     {navList}
    //   </div>
    // </div>
    <nav className="relative bg-secondary h-16 flex sm:px-10">
      <div className="md:container px-6 py-4 mx-auto md:flex md:justify-between md:items-center w-full">
        <div className="flex items-center justify-between w-full">
          <Link to="/">
            <h2 className="text-white font-semibold text-xl">ShopiFy</h2>
          </Link>
          <div className="md:flex gap-4 hidden items-center">{navList}</div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>


        <div className="md:hidden block">
          <div
            className={`absolute inset-x-0 z-20 mt-5 w-full px-4 py-4 transition-all duration-300 ease-in-out bg-secondary flex flex-col gap-1 ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
              }`}
          >
              {navList}

            <div className="flex justify-center md:block">
              <button
                className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                
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
                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;