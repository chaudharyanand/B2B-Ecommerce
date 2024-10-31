import React from "react";
import { useSelector } from "react-redux";
import { selectAllTranslatedTexts } from "../translate/translate-slice";
import { selectAllProductCategories } from "./product-category-slice";

const ProductCategories = () => {
  const productCategories: any = useSelector(selectAllProductCategories);
  const translatedTexts = useSelector(selectAllTranslatedTexts);

  const getText = (key: string) => {
    return translatedTexts
      ? translatedTexts
          .filter((t: any) => t.key === key)
          .map((t: any) => t.translatedText)[0]
      : "";
  };

  console.log(productCategories);

  return (
    <>
      <h2>Product Categories</h2>
      <ul>
        {productCategories &&
          productCategories.map((productCategory: any) => {
            return (
              <li key={productCategory.slug}>
                {getText("Category." + productCategory.slug)}; Slug:{" "}
                {productCategory.slug}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ProductCategories;
