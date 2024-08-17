import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="min-h-[calc(100vh-224px)] px-4 sm:px-10 py-3 bg-primary flex flex-col items-center justify-center gap-3">
      <h1 className="text-center text-white font-bold text-3xl">Find Best Products Here</h1>
      <h1 className="text-center text-gray-400 max-w-[560px]">Discover top-quality Electronics, Fashion, and Home & Office essentials at ShopiFy! Explore our wide range of products from trusted brands, designed to elevate your lifestyle. Shop now and enjoy unbeatable deals on the latest must-have items!</h1>
      <Link to='/products'> <button className="bg-secondary text-gray-100 px-6 py-3 rounded-3xl hover:bg-[#294064]">View Products</button></Link>
    </div>
  );
};

export default Home;