import PropTypes from 'prop-types'
const ProductCard = ({pd}) => {
  const {name, image, brand,  description, price, category, ratings, date} = pd || {}
  return (
    <div className=" bg-gray-100 border-gray-200 border rounded-lg hover:cursor-pointer hover:shadow-md hover:shadow-indigo-100 hover:scale-[1.01]">
      <div className="relative">
        <img className="h-40 rounded w-full object-cover object-center" src={image} alt={name} />
        <p className="absolute bottom-4 right-4 text-gray-200 text-sm p-2 py-1 rounded-xl bg-primary">{ratings}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="tracking-widest text-primary text-xs font-medium title-font">{brand}</h3>
          <h3 className="tracking-widest text-primary text-xs font-medium title-font">#{category}</h3>

        </div>
        <h2 className="text-lg text-gray-800 font-medium title-font mb-2">{name}</h2>
        <p className="leading-relaxed text-gray-700">{description.slice(0,60)}...</p>
        <div className="flex justify-between pt-3">
          <p className="text-gray-100">{date.split("T")[1]}, {date.split("T")[0]}</p>
          <p className="text-primary">${price}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes= {
  pd: PropTypes.object
}

export default ProductCard;