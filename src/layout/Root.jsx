import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <main>
        <Navbar/>
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default Root;