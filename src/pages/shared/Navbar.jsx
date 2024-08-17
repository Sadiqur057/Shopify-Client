import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/login')
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="bg-secondary h-16 flex px-4 sm:px-10 justify-between items-center">
      <Link to="/">
        <h2 className="text-white font-semibold text-xl">ShopiFy</h2>
      </Link>
      {
        loading && <p className="text-gray-300">Loading..</p>
      }
      {
        user && <button onClick={handleLogout} className="bg-primary text-gray-100 px-5 py-2 rounded-3xl">Logout</button>
      }
      {
        !user && !loading && <button className="bg-primary text-gray-100 px-5 py-2 rounded-3xl">Login</button>
      }
    </div>
  );
};

export default Navbar;