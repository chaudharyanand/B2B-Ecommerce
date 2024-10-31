import React from "react";
import type { NextPage } from "next";
import { fetchProducts } from "../features/product/product-slice";
import { fetchTranslatedTexts } from "../features/translate/translate-slice";
import store from "../store";
import Product from "../features/product/product";
import ProductCategories from "../features/product-category/product-categories";
import { fetchProductCategories } from "../features/product-category/product-category-slice";
import Layout from "../components/layout/Layout";
import translate from "./api/translate";
import { fetchData, fetchPagedData } from "../utils/fetch";
import Breadcrumbs from "../components/breadcrumbs/Breadcrumbs";
import Filter from "../components/filter/Filter";
import Item from "../components/item/Item";

const Shop: NextPage = ({ home, configuration, product }: any) => {
  store.dispatch(fetchProducts());
  store.dispatch(fetchProductCategories());
  store.dispatch(fetchTranslatedTexts());

  return (
    <>
      <Layout configuration={configuration} home={home} translate={translate}>
        <Breadcrumbs />
        <div className="bg-white">
          <div className="flex my-4 max-w-fullscreen mx-auto md:px-4">
            <div className="md:w-3/12 lg:w-1/5 xl:w-1/6">
              <Filter />
            </div>
            <div className="w-full md:w-9/12 lg:w-4/5 xl:w-10/12 lg:px-2">
              <Item />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      configuration: await fetchData(
        "/api/configuration?populate[iconLinks][populate][0]=icon&populate[companyAddress][populate][0]=*"
      ),
      home: await fetchData(
        "/api/home?populate[headerLogo][populate]=*&populate[footerLogo][populate]=*&populate[tableReservationImage][populate]=*&populate[eventReservationImage][populate]=*&populate[backgroundImage][populate]=*&populate[mapImage][populate]=*&populate[heroImages][populate]=*&populate[promoImages][populate]=*"
      ),
      footerNote: await fetchData(
        "/api/footer-note?populate[notes][populate][0]=*"
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

export default Shop;
