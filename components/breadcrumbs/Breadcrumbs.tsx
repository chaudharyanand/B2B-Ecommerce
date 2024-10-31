import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { selectAllTranslatedTexts } from "../../features/translate/translate-slice";

const Breadcrumbs = () => {
  const translatedTexts = useSelector(selectAllTranslatedTexts);

  const getText = (key: string) => {
    return translatedTexts
      ? translatedTexts
          .filter((t: any) => t.key === key)
          .map((t: any) => t.translatedText)[0]
      : "";
  };

  return (
    <>
      <div className="bg-breadcrumbsbgcolor">
        <div className="mx-auto max-w-fullscreen px-4">
          <div className="py-4">
            <ul className="flex space-x-4">
              <li className="pr-4 border-r border-gray-300 leading-none">
                <Link
                  href="/"
                  className="text-breadcrumbstextcolor text-sm tracking-wide"
                >
                  <a>{getText("Label.Home")}</a>
                </Link>
              </li>
              <li className="pr-4 leading-none">
                <Link
                  href="/shop"
                  className="text-themecolor text-sm tracking-wide"
                >
                  <a>{getText("Label.Shop")}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
