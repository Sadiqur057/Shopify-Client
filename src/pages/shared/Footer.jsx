const Footer = () => {
  return (
    <div className="bg-dark flex flex-col justify-center py-5 min-h-40 gap-4">
      <div className="flex px-4 sm:px-10 justify-between gap-4">
        <div className="max-w-[70%]">
          <h1 className="text-white font-semibold text-3xl pb-2">ShopiFy</h1>
          <p className="text-gray-300 text-sm">Best product in you hand.</p>
          <p></p>
        </div>
        <div>
          <p className="text-white font-semibold pb-2f">Links</p>
          <p className="text-gray-300 text-sm">Products</p>
          <p className="text-gray-300 text-sm">Contact</p>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm">&copy; Copyright ShopiFy. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;