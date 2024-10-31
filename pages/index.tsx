import type { NextPage } from "next";
import Link from "next/link";
import AsideNav from "../components/aside/AsideNav";
import LandingScreen from "../components/landing-screen/LandingScreen";
import Layout from "../components/layout/Layout";
import MainContainer from "../components/main-container/MainContainer";
import TopCategory from "../components/top-category/TopCategory";
import WebFeatures from "../components/web-features/WebFeatures";
import { fetchProductCategories } from "../features/product-category/product-category-slice";
import { fetchProducts } from "../features/product/product-slice";
import { fetchTranslatedTexts } from "../features/translate/translate-slice";
import store from "../store";
import { fetchData, fetchPagedData } from "../utils/fetch";

const Home: NextPage = ({
  configuration,
  home,
  agb,
  reviews,
  aboutUs,
  impressum,
  translatableStrings,
  imageLibraries,
}: any) => {
  const translate = tranformTranslatableStrings(translatableStrings);
  const imageLibary = images(imageLibraries);

  store.dispatch(fetchProducts());
  store.dispatch(fetchProductCategories());
  store.dispatch(fetchTranslatedTexts());

  console.log("Configuration: ", configuration);
  console.log("Home: ", home);
  console.log("AGB: ", agb);
  console.log("Reviews: ", reviews);
  console.log("About Us: ", aboutUs);
  console.log("Impressum: ", impressum);

  return (
    <>
      <div className="">
        <Layout configuration={configuration} home={home} translate={translate}>
          <TopCategory />

          <div className="mx-auto max-w-fullscreen">
            <LandingScreen home={home} />
          </div>

          <WebFeatures />

          <div className="bg-white">
            <div className="flex my-4 max-w-fullscreen mx-auto px-4">
              <div className="hidden md:block w-1/3 lg:w-1/5 pr-4">
                <AsideNav reviewsProps={reviews} imageLibary={imageLibary} />
              </div>
              <div className="w-full md:w-2/3 lg:w-4/5">
                <MainContainer home={home} />
              </div>
            </div>
          </div>

        </Layout>

      </div>

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

export default Home;
