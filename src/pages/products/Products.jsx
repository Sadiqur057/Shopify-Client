import ProductCard from "./ProductCard";
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useMutation, useQuery } from '@tanstack/react-query';
import Spinner from "../shared/Spinner";
import { useState } from "react";
import { Option, Select, Dialog, DialogBody } from "@material-tailwind/react";
import axios from "axios";

const Products = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(curr => !curr);
  const handleClose = () => setOpen(curr => !curr);

  const [BrandValue, setBrandValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [formValues, setFormValues] = useState({ keyword: "", minPrice: "", maxPrice: "" });

  // pagination related
  const [count, setCount] = useState(0)
  const [currPage, setCurrPage] = useState(0)
  const numOfPages = Math.ceil(count / 12)
  const pages = [...Array(numOfPages).keys()]

  const handleNextPage = () => {
    if (currPage + 1 !== numOfPages) {
      setCurrPage(prev => prev + 1)
    }
  }
  const handlePrevPage = () => {
    if (currPage !== 0) {
      setCurrPage(prev => prev - 1)
    }
  }


  const categoryOptions = [
    { label: "All", value: "" },
    { label: "Electronics", value: "Electronics" },
    { label: "Fashion", value: "Fashion" },
    { label: "Home & Office", value: "Home & Office" }
  ];

  const sortingOptions = [
    { label: "Default", value: "" },
    { label: "Date", value: "date" },
    { label: "Price (Low to High)", value: "priceLow" },
    { label: "Price (High to Low)", value: "priceHigh" }
  ];

  const BrandOptions = [
    { label: "All", value: "" },
    { label: "GigaTech", value: "GigaTech" },
    { label: "TechMaster", value: "TechMaster" },
    { label: "Sportify", value: "Sportify" },
    { label: "UrbanStyle", value: "UrbanStyle" },
    { label: "SmartWear", value: "SmartWear" },
    { label: "ComfortLine", value: "ComfortLine" }
  ];

  const handleCategoryOptions = (value) => {
    setCategoryValue(value);
  };

  const handleBrandOptions = (value) => {
    setBrandValue(value);
  };

  const handleSortingOptions = (value) => {
    setSortBy(value)
  };

  // Fetch all data initially
  const { data: allData, isLoading: isQueryLoading, isError: isQueryError, error: queryError } = useQuery({
    queryKey: ['ProductsData', currPage],
    queryFn: async () => {
      const res = await axios.get(`https://shopify-server-topaz.vercel.app/products
?page=${currPage}`);
      setCount(res.data.count)
      return res.data.products;
    }
  });

  // useMutation for filtering the data
  const { data: filteredData, mutate, isLoading: isMutateLoading, isError: isMutateError, error: mutateError } = useMutation({
    mutationKey: [currPage],
    mutationFn: async (filteredData) => {
      const res = await axios.post(`https://shopify-server-topaz.vercel.app/products?page=${currPage}`, filteredData);
      setOpen(false)
      setCount(res.data.count)
      return res.data.products;
    }
  });

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    setCurrPage(0)
    const keyword = formValues.keyword;
    const minPrice = formValues.minPrice;
    const maxPrice = formValues.maxPrice;
    const category = categoryValue || "";
    const brand = BrandValue || "";

    const filterData = { sortBy, keyword, category, brand, maxPrice, minPrice };
    mutate(filterData);
  };

  const handleReset = () => {
    setCurrPage(0)
    setSortBy("")
    setCategoryValue("");
    setBrandValue("")
    formValues.maxPrice = ""
    formValues.minPrice = ""
    formValues.keyword = ""
    mutate()
  }


  if (isQueryError || isMutateError) {
    const error = queryError || mutateError;
    return <div>Error: {error.message}</div>;
  }

  // Determine which data to display: all data or filtered data
  const productsToDisplay = filteredData || allData;

  return (
    <div className="min-h-[calc(100vh-224px)] px-4 sm:px-10 py-4 sm:py-10">
      <div className="flex justify-between pb-6 gap-2 sm:gap-10 items-center">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            name="keyword"
            onChange={handleFormInputChange}
            placeholder="Search"
            className="py-2 sm:py-3  rounded-3xl px-2 border border-gray-300 sm:px-4 text-gray-500 w-[180px] sm:w-[340px]"
          />
          <button
            className="text-white bg-primary rounded-full p-3 sm:p-4 border border-indigo-600"
            onClick={handleFilter}
          >
            <FaSearch />
          </button>
        </div>
        <button
          className="text-white bg-primary px-3 sm:px-6 rounded-3xl py-2 sm:py-3 border border-indigo-600 flex items-center gap-1"
          onClick={handleOpen}
        >
          <MdOutlineDashboardCustomize /> Filter
        </button>

        <Dialog size="md" className="rounded-xl mb-20 " open={open} handler={handleOpen}>
          <div className="flex justify-end pr-4 md:pr-6 mb-1 pt-4">
            <button onClick={handleClose}>
              <IoCloseSharp className="text-gray-400 text-2xl" />
            </button>
          </div>
          <DialogBody className="max-h-[90vh] overflow-auto rounded-lg px-5 pb-14 sm:pb-6 md:px-8">
            <div className="p-4 flex flex-col gap-3">
              <Select value={categoryValue} label="Select Category" color="indigo" required onChange={handleCategoryOptions}>
                {categoryOptions.map(category => (
                  <Option key={category.value} value={category.value}>
                    {category.label}
                  </Option>
                ))}
              </Select>

              <Select label="Select Brand" color="indigo" required onChange={handleBrandOptions} value={BrandValue}>
                {BrandOptions.map(brand => (
                  <Option key={brand.value} value={brand.value}>
                    {brand.label}
                  </Option>
                ))}
              </Select>

              <Select label="Sort by" value={sortBy} color="indigo" required onChange={handleSortingOptions} >
                {sortingOptions.map(sorting => (
                  <Option key={sorting.value} value={sorting.value}>
                    {sorting.label}
                  </Option>
                ))}
              </Select>

              <div className="flex gap-4">
                <input
                  type="number"
                  value={formValues.minPrice}
                  onChange={handleFormInputChange}
                  className="px-3 py-2 border border-indigo-gray-200 rounded-xl w-[50%]"
                  placeholder="min price"
                  name="minPrice"
                />
                <input
                  type="number"
                  value={formValues.maxPrice}
                  onChange={handleFormInputChange}
                  className="px-3 py-2 border border-indigo-gray-200 rounded-xl w-[50%]"
                  placeholder="max price"
                  name="maxPrice"
                />
              </div>
              <div className="flex gap-3">
                <button onClick={handleReset} className="text-white bg-primary py-2 rounded-xl w-full">
                  Reset
                </button>
                <button onClick={handleFilter} className="text-white bg-[#143b91] py-2 rounded-xl w-full">
                  Apply
                </button>
              </div>
            </div>
          </DialogBody>
        </Dialog>
      </div>
      {
        isQueryLoading || isMutateLoading
          ? <Spinner />
          : <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productsToDisplay?.map(pd => (
                <ProductCard key={pd?._id} pd={pd} />
              ))}
            </div>
            <div className="mt-4 text-white flex justify-center gap-2">
              <button onClick={handlePrevPage} className="bg-secondary py-1 px-1.5 rounded">Prev</button>
              {
                pages.map(page => <button onClick={() => setCurrPage(page)} className={`${page === currPage ? "bg-indigo-600" : "bg-secondary"} min-w-8 min-h-8 p-1 rounded`} key={page}>{page + 1}</button>)
              }
              <button onClick={handleNextPage} className="bg-secondary py-1 px-1.5 rounded">Next</button>
            </div>
          </div>
      }

    </div>
  );
};

export default Products;
