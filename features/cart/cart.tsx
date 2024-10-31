import React from "react";
import { useSelector} from "react-redux";
import { selectAllTranslatedTexts } from "../translate/translate-slice";
import CartItem from "./cart-item";
import { clearCart, selectAllCartItems } from "./cart-slice";
import { stat } from "fs";


const Cart = () => {
  const translatedTexts = useSelector(selectAllTranslatedTexts);
  const cartItems = useSelector(selectAllCartItems);
  console.log(cartItems);

  const getText = (key: string) => {
    return translatedTexts
      ? translatedTexts
          .filter((t: any) => t.key === key)
          .map((t: any) => t.translatedText)[0]
      : "";
  };

  return (
    <>
      <div className="p-4">
        <div className="mb-3 p-3 border-t border-b">
          <div className="flex items-center justify-between">
            <div className="text-themetextcolor font-medium text-lg">
              {getText("Label.Cart")}
            </div>
            <div className="text-themetextcolor">{cartItems.length} items</div>
          </div>
        </div>
        <div className="my-4">
          {cartItems &&
            cartItems.length &&
            cartItems.map((cartItem: any) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
