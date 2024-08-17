import PropTypes from 'prop-types'
const ProductCard = ({pd}) => {
  const {name, image, brand,  description, price, category, ratings, date} = pd || {}
  return (
    <div className="bg-secondary rounded-lg hover:cursor-pointer">
      <div className="relative">
        <img className="h-40 rounded w-full object-cover object-center" src={image} alt={name} />
        <p className="absolute bottom-4 right-4 text-gray-200 text-sm p-2 py-1 rounded-xl bg-indigo-500">{ratings}</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{brand}</h3>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">#{category}</h3>

        </div>
        <h2 className="text-lg text-gray-200 font-medium title-font mb-4">{name}</h2>
        <p className="leading-relaxed text-gray-400">{description.slice(0,60)}...</p>
        <div className="flex justify-between pt-3">
          <p className="text-gray-100">{date.split("T")[1]}, {date.split("T")[0]}</p>
          <p className="text-indigo-500">${price}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes= {
  pd: PropTypes.object
}

export default ProductCard;