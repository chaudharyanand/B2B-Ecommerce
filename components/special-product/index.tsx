import { useSelector } from "react-redux";
import { selectCurrencySymbol } from "../../features/cart/cart-slice";
import Price from "../price/Price";
import ReactStars from "react-rating-stars-component";
const SpecialProduct = ({ product }: any) => {

  // console.log("Nouman " + JSON.stringify(product));



  return (
    <>
      <div className="flex gap-3 px-2 w-full h-82">
        <div className="flex mt-6">
          <div>
            <img src={
              product.mainImage
                ? process.env.NEXT_PUBLIC_BASE_URL +
                product.mainImage.original
                : ""
            }
              alt={product.slug} className="w-[68px] h-[81px]" />
          </div>
          <div className="flex flex-col ml-4 text-black ">
            <span className="text-[15px] font-500 pt-2 pl-7">{product.name}</span>
            <span className="text-[15px]  font-medium  pl-7">4 Stars</span>
            <span className="text-[15px]   font-bold pl-7"><Price price={product.price} symbolAtEnd={true} /></span>
          </div>
        </div>

      </div>
    </>
  );
};

export default SpecialProduct;
