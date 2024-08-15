import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="min-h-[calc(100vh-224px)] px-4 sm:px-10 py-3 bg-primary flex flex-col items-center justify-center gap-3">
      <h1 className="text-center text-white font-bold text-3xl">Find Best Products Here</h1>
      <h1 className="text-center text-gray-400 max-w-[560px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquid rerum tempore debitis nihil laborum vel nesciunt eaque ipsam veniam corrupti nisi eligendi ab id numquam porro, eius, minima culpa.</h1>
      <Link to='/products'> <button className="bg-secondary text-gray-100 px-6 py-3 rounded-3xl hover:bg-[#294064]">Get Now</button></Link>
    </div>
  );
};

export default Home;