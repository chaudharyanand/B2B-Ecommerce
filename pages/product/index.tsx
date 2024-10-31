import type { NextPage } from "next";
import React from "react";
import Layout from "../../components/layout/Layout";
import { fetchData, fetchPagedData } from "../../utils/fetch";
import store from "../../store";
import { fetchTranslatedTexts } from "../../features/translate/translate-slice";
import { fetchProductCategories } from "../../features/product-category/product-category-slice";
import {
  fetchProducts,
  selectAllProducts,
} from "../../features/product/product-slice";
import { useSelector } from "react-redux";
import ProductDetails from "../../features/product/product";

const Product: NextPage = ({ configuration, home, translate }: any) => {
  store.dispatch(fetchTranslatedTexts());
  store.dispatch(fetchProducts());
  store.dispatch(fetchProductCategories());

  return (
    <>
      <Layout configuration={configuration} home={home} translate={translate}>
        <ProductDetails />
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

export default Product;
