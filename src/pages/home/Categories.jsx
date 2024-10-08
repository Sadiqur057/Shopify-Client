const Categories = () => {

  const categoryData = [
    {
      id: 1,
      image: "https://pagedone.io/asset/uploads/1688029394.png",
      heading: "Hello",
      alt: "hello"
    },
    {
      id: 8,
      image: "https://pagedone.io/asset/uploads/1688029394.png",
      heading: "Hello",
      alt: "hello"
    },
    {
      id: 3,
      image: "https://pagedone.io/asset/uploads/1688025668.png",
      heading: "Hello",
      alt: "hello"
    },
    {
      id: 4,
      image: "https://pagedone.io/asset/uploads/1688029344.png",
      heading: "Hello",
      alt: "hello"
    },
    {
      id: 5,
      image: "https://pagedone.io/asset/uploads/1688029394.png",
      heading: "Hello",
      alt: "hello"
    },
    {
      id: 6,
      image: "https://pagedone.io/asset/uploads/1688029394.png",
      heading: "Hello",
      alt: "hello"
    },
    {
      id: 7,
      image: "https://pagedone.io/asset/uploads/1688029394.png",
      heading: "Hello",
      alt: "hello"
    },
    {
      id: 8,
      image: "https://pagedone.io/asset/uploads/1688029394.png",
      heading: "Hello",
      alt: "hello"
    }
  ]

  return (
    <div>
      <div className="">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">Top Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
              <img src="https://pagedone.io/asset/uploads/1688029394.png" alt="Watch" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-2xl font-bold text-white">Smart Watch</h3>
                  <p className="text-white">Discover the features of the smart watch</p>
                </div>
              </div>
            </div>

            {
              categoryData.map(data => (
                <div key={data?.id} className="relative overflow-hidden rounded-2xl shadow-lg group">
                  <img src="https://pagedone.io/asset/uploads/1688029344.png" alt="Food" className="object-fit w-full object-cover" />
                  <div
                    className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-xl font-bold text-white">Culinary Delights</h4>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;