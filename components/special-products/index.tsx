import { useSelector } from "react-redux";
import SpecialProduct from "../special-product";
import { selectAllProducts } from "../../features/product/product-slice";
const SpecialProducts = () => {

  const products = useSelector(selectAllProducts);
  const specialProducts = products.filter((_, index) => index < 3);


  return (
    <>
      {/* bg-slate-50 */}
      <div className="w-[230px] h-[334px] md:-ml-12  border-red-900  flex flex-col mt-[38px] mb-[25px] ">
        <div className="text-[20px] font-bold pb-2 border-b border-gray-200">
          Special <span className="text-themecolor">Product</span>
        </div>

        <div>
          {
            specialProducts && specialProducts.map((prod: any) => (
              <SpecialProduct product={prod} />
            ))
          }
        </div>



      </div>
    </>
  );
};

export default SpecialProducts;
