const ProductCard = () => {
  return (
    <div className="bg-secondary rounded-lg">
      <div className="relative">
        <img className="h-40 rounded w-full object-cover object-center" src="https://dummyimage.com/721x401" alt="content" />
        <p className="absolute bottom-4 right-4 text-gray-200 text-sm p-2 py-1 rounded-xl bg-indigo-500">4.0/5</p>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Brand</h3>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">#category</h3>

        </div>
        <h2 className="text-lg text-gray-200 font-medium title-font mb-4">Product Name</h2>
        <p className="leading-relaxed text-gray-400">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt.</p>
        <div className="flex justify-between pt-3">
          <p className="text-gray-100">Date: 12 jan, 2024</p>
          <p className="text-indigo-500">Price: 59$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;