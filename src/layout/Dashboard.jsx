import { NavLink, Outlet } from "react-router-dom";
import React, { useEffect } from "react";
import { LuAlignRight } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FaCartPlus, FaSitemap, FaUserAlt } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { MdManageAccounts, MdManageHistory, MdOutlineAddHomeWork, MdOutlineLibraryAdd } from "react-icons/md";
import { FaCircleDollarToSlot, FaShop } from "react-icons/fa6";


import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

const Dashboard = () => {
  const [open, setOpen] = React.useState(true);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 960) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeStyles =
    "bg-blue-gray-700 rounded-md";

  return (
    <div
      className="flex relative">
      <div
        className="absolute">
        <button
          onClick={openDrawer}
          className="p-5">
          <LuAlignRight />
        </button>
      </div>
      <div
        className="w-fit">
        <Drawer
          open={open}
          overlay={false}
          className="shadow-none lg:relative w-[274px] px-1 bg-dark">
          <div
            className="mb-2 flex items-center justify-between p-4">
            <Typography
              variant="h5"
              color="white">
              ShopiFy
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              className=" block lg:hidden"
              onClick={closeDrawer}>
              <IoMdClose />
            </IconButton>
          </div>
          <List className="text-white">
            <NavLink to="/dashboard/user"
              className={({ isActive }) => (isActive && activeStyles)}>
              <ListItem>
                <ListItemPrefix>
                  <FaUserAlt />
                </ListItemPrefix>
                Profile
              </ListItem>
            </NavLink>
            <NavLink to="/dashboard/carts"
              className={({ isActive }) => (isActive && activeStyles)}>
            <ListItem>
              <ListItemPrefix>
                <FaCartPlus />
              </ListItemPrefix>
              Cart
              <ListItemSuffix>
                <Chip
                  value="5"
                  size="sm"
                  color="green"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
              </NavLink>
            <ListItem>
              <ListItemPrefix>
                <MdManageHistory />
              </ListItemPrefix>
              Purchase History
              <ListItemSuffix>
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FaCircleDollarToSlot />
              </ListItemPrefix>
              Sales
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FaSitemap />
              </ListItemPrefix>
              Manage Products
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <MdOutlineLibraryAdd />
              </ListItemPrefix>
              Add Products
            </ListItem>

            {/* Admin */}
            <ListItem>
              <ListItemPrefix>
                <ImStatsBars />
              </ListItemPrefix>
              Statistics
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <MdManageAccounts />
              </ListItemPrefix>
              Manage Users
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <FaShop />
              </ListItemPrefix>
              Manage Shops
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <MdOutlineAddHomeWork />
              </ListItemPrefix>
              Manage Registrations
            </ListItem>
          </List>
        </Drawer>
      </div>

      <div className="col-span-2 h-screen w-full pt-10 p-4 lg:p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;