const Categories = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Top Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688029394.png" alt="Watch" className="w-full h-full object-cover"/>
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">Smart Watch</h3>
                    <p className="text-white">Discover the features of the smart watch</p>
                  </div>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688029344.png" alt="Food" className="w-full h-48 object-cover"/>
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">Culinary Delights</h4>
                  </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688029370.png" alt="Technology" className="w-full h-48 object-cover"/>
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">Tech Innovations</h4>
                  </div>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688029384.png" alt="Travel" className="w-full h-48 object-cover"/>
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">Travel Adventures</h4>
                  </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688025668.png" alt="Art" className="w-full h-48 object-cover"/>
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">Artistic Expressions</h4>
                  </div>
                </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688029408.png" alt="Sport" className="w-full h-48 object-cover"/>
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">Swimming</h4>
                  </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688029424.jpg" alt="Sport" className="w-full h-48 object-cover"/>
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">Chess</h4>
                  </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688029434.png" alt="Sport" className="w-full h-48 object-cover"/>
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">Football</h4>
                  </div>
                </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688029447.jpg" alt="Sport" className="w-full h-48 object-cover"/>
                <div
                  className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">Cricket</h4>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;