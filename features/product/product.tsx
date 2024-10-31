import { Tab, RadioGroup, Disclosure } from "@headlessui/react";
import image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllProducts, selectProductById } from "./product-slice";
import { useRouter } from "next/router";
import Price from "../../components/price/Price";
import { selectAllTranslatedTexts } from "../translate/translate-slice";
import "material-icons/iconfont/outlined.css";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addOne, deleteOne } from "../cart/cart-slice";
import Tabs from "../../components/product-tabs/Tabs";


const ProductDetails = ({ productId }: any) => {
  const dispatch = useDispatch();

  const product: any = useSelector((state: any) =>
    selectProductById(state, productId)
  );
  const translatedTexts = useSelector(selectAllTranslatedTexts);
  const [selectedSize, setSelectedSize] = useState();
  const router = useRouter();
  console.log(product);

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }

  const getText = (key: string) => {
    return translatedTexts
      ? translatedTexts
          .filter((t: any) => t.key === key)
          .map((t: any) => t.translatedText)[0]
      : "";
  };

  const handleAddToCart = () => {
    dispatch(addOne(product));
  };
  

  const tempproduct = {
    sizes: [
      { name: "50g", inStock: true },
      { name: "100g", inStock: true },
      { name: "150g", inStock: true },
      { name: "250g", inStock: true },
      { name: "500g", inStock: true },
      { name: "1kg", inStock: false },
    ],
  };
  /*tabs*/
  //const ProductDetails: React.FC = () => {
    const tabs = [
      {
        label: "Description",
        content: <div>Tab 1 Content</div>,
      },
      {
        label: "Reviews",
        content: <div>Tab 2 Content</div>,
      },
      {
        label: "Comments",
        content: <div>Tab 3 Content</div>,
      },
    ];

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-10 px-3 sm:py-14 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              stopOnHover={false}
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={30}
              className=""
            >
              <img
                src={
                  product && product.mainImage
                    ? process.env.NEXT_PUBLIC_BASE_URL +
                      product.mainImage.original
                    : ""
                }
                alt={``}
                className="h-full w-full object-cover object-center"
              />
              {product &&
                product.images &&
                product.images.map((image: any, index: number) => (
                  <div key={index}>
                    <img
                      className=""
                      alt={``}
                      src={
                        image.original
                          ? process.env.NEXT_PUBLIC_BASE_URL + image.original
                          : ""
                      }
                    />
                  </div>
                ))}
            </Carousel>

            <div className="mt-10 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-lg sm:text-2xl font-extrabold tracking-tight text-themetextcolor">
                {product ? getText("Product." + product.name) : ""}
              </h1>

              <div className="mt-3">
                <p className="text-lg sm:text-2xl tracking-tight text-themetextcolor">
                  {product ? product.price : ""}
                </p>
              </div>
              <div className="mt-3">
                <div className="text-base sm:text-lg text-gray-500">
                  {product
                    ? getText(`Product.${product.name}.Description`)
                    : ""}
                </div>
              </div>
              <div className="mt-3">
                <div className="">
                  <div className="mt-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-themetextcolor">
                        {getText(`Label.Size`)}
                      </h3>
                      <a
                        href="#"
                        className="text-sm font-medium text-themecolor hover:text-opacity-80"
                      >
                        {getText(`Label.SizeGuide`)}
                      </a>
                    </div>

                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        {" "}
                        Choose a size{" "}
                      </RadioGroup.Label>
                      <div className="flex overflow-x-auto space-x-4">
                        {tempproduct.sizes.map((size) => (
                          <RadioGroup.Option
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ active }: any) =>
                              classNames(
                                size.inStock
                                  ? "bg-white shadow-sm cursor-pointer hover:border-themecolor hover:text-themecolor"
                                  : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                active
                                  ? "bg-themecolor text-white hover:text-white"
                                  : "text-gray-900",
                                "group relative border rounded py-3 px-4 flex items-center justify-center text-sm font-medium uppercase focus:outline-none"
                              )
                            }
                          >
                            {({ active, checked }: any) => (
                              <>
                                <RadioGroup.Label as="span">
                                  {size.name}
                                </RadioGroup.Label>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      active ? "border" : "border-2",
                                      checked
                                        ? "border-themecolor"
                                        : "border-transparent",
                                      "pointer-events-none absolute -inset-px rounded"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 flex items-center">
                <div className="text-lg font-bold text-themetextcolor">
                  {getText(`Label.Quantity`)}
                </div>
                <div className="ml-4 text-themetextcolor flex justify-around items-center border w-24 h-9 rounded text-base outline-none">
                  <button
                    type="button"
                    title="Remove one from cart"
                    className="h-full text-xl duration-300 hover:text-themecolor outline-none"
                  >
                    -
                  </button>

                  <div>1</div>

                  <button
                    type="button"
                    title="Add one to cart"
                    className="h-full text-xl duration-300 hover:text-themecolor outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="mt-3 pt-3 flex bg-white">
                <button
                  type="submit"
                  className="secondaryThemeButton mr-2 h-12 p-4 text-sm sm:text-base"
                >
                  <span className="material-icons-outlined">
                    favorite_border
                  </span>
                </button>
                <button
                  onClick={() => {
                    handleAddToCart();
                    router.push("/cart");
                  }}
                  type="submit"
                  className="primaryThemeButton w-full md:max-w-[240px] h-12 p-4 text-sm sm:text-base"
                >
                  <span className="material-icons-outlined mr-2">
                    local_mall
                  </span>
                  {getText(`Button.AddToCart`)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tabs tabs={tabs} />
      </div>
    </>
  );
};

export default ProductDetails;
