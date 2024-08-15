import { useContext } from "react";
import ProductCard from "./ProductCard";
import { AuthContext } from "../../provider/AuthProvider";


const Products = () => {
  // Product Name, Product Image, category  Description, Price, Category, Ratings and Product Creation date and time.
  const {user} = useContext(AuthContext);

  console.log(user)
  return (
    <div className="min-h-[calc(100vh-224px)] px-4 sm:px-10 py-4 sm:py-10 bg-primary">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>

      </div>
    </div>
  );
};

export default Products;