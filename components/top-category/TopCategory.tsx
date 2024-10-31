import React from "react";
import { useSelector } from "react-redux";
import { selectAllProductCategories } from "../../features/product-category/product-category-slice";
import { selectAllProducts } from "../../features/product/product-slice";
import { selectAllTranslatedTexts } from "../../features/translate/translate-slice";
import products from "../../pages/api/products";

const TopCategory = () => {
  const productCategories: any = useSelector(selectAllProductCategories);
  const translatedTexts = useSelector(selectAllTranslatedTexts);

  console.log(productCategories);
  console.log(translatedTexts);

  const getText = (key: string) => {
    return translatedTexts
      ? translatedTexts
          .filter((t: any) => t.key === key)
          .map((t: any) => t.translatedText)[0]
      : "";
  };

  return (
    <>
      <div className="max-w-fullscreen mx-auto">
        <div className="w-full flex overflow-hidden relative">
          <ul className="flex overflow-x-scroll">
            <li className="px-4 py-3 flex space-x-4">
              {productCategories &&
                productCategories.map((cat: any) => {
                  if (
                    cat.products &&
                    Object.keys(cat.products).length &&
                    cat.products.length
                  ) {
                    return (
                      <a
                        key={cat.id}
                        href={`#${cat.slug}`}
                        className="flex flex-col items-center"
                      >
                        <img
                          className="h-16 min-w-[5rem]"
                          alt={cat.slug}
                          id={cat.slug}
                          src={
                            cat.image
                              ? process.env.NEXT_PUBLIC_BASE_URL +
                                cat.image.original
                              : ""
                          }
                        />
                        <a
                          key={cat.id}
                          href={`#${cat.slug}`}
                          className={`hover:text-productcategorytextHover mt-[5px] text-base 2xl:text-xl`}
                        >
                          {getText("Category." + cat.name)}
                        </a>
                      </a>
                    );
                  }
                })}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopCategory;
