import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../pages/shared/Spinner";
import PropTypes from 'prop-types'
import { Navigate } from "react-router-dom"

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  if (loading) {
    return <Spinner />
  }
  if (user) {
    return children
  }

  return <Navigate to='/login'></Navigate>

};


PrivateRoutes.propTypes = {
  children: PropTypes.node
};

export default PrivateRoutes;
