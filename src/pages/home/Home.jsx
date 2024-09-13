import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className="md:container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                  Best place to choose <br /> your {" "}
                  <span className="text-blue-500">Products</span>
                </h1>

                <p className="my-4 text-gray-600 dark:text-gray-400">
                Discover top-quality Electronics, Fashion, and Home & Office essentials at ShopiFy! Explore our wide range of products from trusted brands, designed to elevate your lifestyle. Shop now and enjoy unbeatable deals on the latest must-have items!
                </p>

                <Link to='/shop'> <button className="bg-blue-600 hover:bg-blue-500 text-gray-100 px-6 py-3 rounded-3xl">View All Products</button></Link>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-3xl"
                src="https://merakiui.com/images/components/Catalogue-pana.svg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
  );
};

export default Home;