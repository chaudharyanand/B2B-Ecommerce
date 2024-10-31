import { NextPage } from "next";
import React from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import Layout from "../components/layout/Layout";
import Cart from "../features/cart/cart";
import { fetchSavedCart } from "../features/cart/cart-slice";
import { fetchProductCategories } from "../features/product-category/product-category-slice";
import { fetchProducts } from "../features/product/product-slice";
import { fetchTranslatedTexts } from "../features/translate/translate-slice";
import store from "../store";
import { fetchData, fetchPagedData } from "../utils/fetch";
import Clear from "../features/cart/clear";


const cart: NextPage = ({
  configuration,
  home,
  translate,
  translatableStrings,
}: any) => {
  store.dispatch(fetchTranslatedTexts());
  store.dispatch(fetchProducts());
  store.dispatch(fetchProductCategories());
  store.dispatch(fetchSavedCart());

  return (
    <>
      <Layout configuration={configuration} home={home} translate={translate}>
        <div className="bg-white">
          <div className="my-4 max-w-fullscreen mx-auto md:px-4 lg:flex">
            <div className="w-full lg:w-8/12">
              <Cart />
            </div>
            
            <div className="w-full lg:w-4/12">
              <CheckoutForm />
            </div>
          </div>
        </div>
        <div className="flex gap-15">
          <button className="underline text-themecolor py-2 px-10">Update Cart</button>
          <a href="/shop">
          <button className="underline text-themecolor py-2 px-10">Continue Shopping</button>
          </a>
          <div className="py-2 px-10"><Clear/></div>
        </div>
              
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      configuration: await fetchData(
        "/api/configuration?populate[iconLinks][populate][0]=*&populate[companyAddress][populate][0]=*&populate[geoLocation][populate]=*"
      ),
      home: await fetchData(
        "/api/home?populate[headerLogo][populate]=*&populate[footerLogo][populate]=*&populate[tableReservationImage][populate]=*&populate[eventReservationImage][populate]=*&populate[backgroundImage][populate]=*&populate[mapImage][populate]=*&populate[heroImages][populate]=*&populate[promoImages][populate]=*"
      ),
      reviews: await fetchData(
        "/api/reviews?populate[reviewerImage][populate]=*"
      ),
      agb: await fetchData("/api/agb?populate[contentSections][populate][0]=*"),
      aboutUs: await fetchData(
        "/api/about-us?populate[contentSections][populate][0]=*"
      ),
      impressum: await fetchData(
        "/api/impressum?populate[contentSections][populate][0]=*"
      ),
      translatableStrings: await fetchPagedData(
        "/api/translatable-strings?pagination[page]=$$page",
        false
      ),
      imageLibraries: await fetchData("/api/image-libraries?populate=*"),
    },
  };
}

const tranformTranslatableStrings = (translatableStrings: any) => {
  const stringsMap = new Map<string, string>();
  translatableStrings.forEach((translatableStr: any) => {
    stringsMap.set(
      translatableStr.attributes.key,
      translatableStr.attributes.translatedText
    );
  });

  return (key: any) => stringsMap.get(key);
};

const images = (imageLibraries: any) => {
  const stringsMap = new Map<string, string>();
  imageLibraries.forEach((imageLibraryItem: any) => {
    stringsMap.set(
      imageLibraryItem.attributes.key,
      imageLibraryItem.attributes.image
        ? imageLibraryItem.attributes.image.data.attributes.url
        : ""
    );
  });

  return (key: any) => stringsMap.get(key);
};

export default cart;
