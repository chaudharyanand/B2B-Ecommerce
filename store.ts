import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product/product-slice";
import productCategorySlice from "./features/product-category/product-category-slice";
import translateSlice from "./features/translate/translate-slice";
import cartSlice from "./features/cart/cart-slice";




const store = configureStore({
  reducer: {
    products: productSlice,
    productCategories: productCategorySlice,
    cart: cartSlice,
    translatedTexts: translateSlice,
    
    
  },
  
});

export default store;
