const Navbar = () => {
  return (
    <div className="bg-secondary h-16 flex px-4 sm:px-10 justify-between items-center">
      <h2 className="text-white font-semibold text-xl">ShopiFy</h2>
      <button className="bg-primary text-gray-100 px-5 py-2 rounded-3xl">Login</button>
    </div>
  );
};

export default Navbar;