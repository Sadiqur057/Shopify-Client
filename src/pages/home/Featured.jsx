import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Spinner from '../shared/Spinner';
import ProductCard from '../products/ProductCard';
import { Link } from 'react-router-dom';

const Featured = () => {
  const { isLoading, data: featuredProducts } = useQuery({
    queryKey: ['productsData'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/featured-products')
      console.log("data", res.data)
      return res.data
    }
  })
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className='bg-gray-100 my-10 md:my-16 py-10 md:py-16'>
      <div className='max-w-7xl w-[90%] md:w-4/5 mx-auto '>
        <h1 className="text-[26px] font-medium text-gray-800 lg:text-4xl">
          Featured
          <span className="text-primary"> Products</span>
        </h1>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 my-4'>
          {
            featuredProducts?.map(pd => (
              <ProductCard
                key={pd?._id}
                pd={pd} />
            ))
          }
        </div>
        <div className='flex justify-center'>
          <Link to='/shop'>
            <button className="hover:bg-[#1e53cd] bg-primary text-gray-100 px-6 py-3 rounded-3xl">View All Products</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Featured;