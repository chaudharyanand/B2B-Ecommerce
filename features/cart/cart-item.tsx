import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, selectProductById } from "../product/product-slice";
import { addOne, removeOne, deleteOne } from "./cart-slice";

const CartItem = ({ cartItem }: any) => {
  const dispatch = useDispatch();
  const product: any = useSelector((state: any) =>
    selectProductById(state, cartItem.productId)
  );

  const handleRemoveOne = () => {
    dispatch(removeOne(cartItem.id));
  };

  const handleAddOne = () => {
    dispatch(addOne(product));
  };
  /*Remove one Cart */
   const deleteCart = () =>{
    dispatch(deleteOne(cartItem.id));
   }    
  if (!product) return <></>;

  return (
    <div className="flex items-center my-4">
      <img
        className={`w-24 h-24 lg:h-36 lg:w-36`}
        alt=""
        src={
          product && product.mainImage
            ? process.env.NEXT_PUBLIC_BASE_URL + product.mainImage.original
            : ""
        }
      />
      <div className="grid grid-cols-3 justify-between items-center w-full">
        <div className="flex flex-col pl-4">
          <div className="text-themetextcolor text-base font-bold mb-2">
            {product.name}
          </div>
          <div className="pb-1">Size</div>
          <div className="text-themetextcolor text-sm pb-1">
            {product.price} USD
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex justify-around items-center border w-24 h-9 rounded-[3px] text-base outline-none">
            <button
              type="button"
              title="Remove one from cart"
              onClick={handleRemoveOne}
              className="h-full text-xl duration-300 lg:hover:scale-150 outline-none"
            >
              -
            </button>

            <div>{cartItem.quantity}</div>

            <button
              type="button"
              title="Add one to cart"
              onClick={handleAddOne}
              className="h-full text-xl duration-300 lg:hover:scale-150 outline-none"
            >
              +
            </button>
          </div>
          <button className="pt-2 text-themecolor text-sm underline" onClick={deleteCart}> Remove </button>
        </div>
        <div className="w-full">
          <div className="text-end">{product.price} USD</div>
        </div>
      </div>
      </div>
    );
};

export default CartItem;
