import { faArrowUpWideShort, faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectAllTranslatedTexts } from '../../features/translate/translate-slice';
import FilterByCategories from '../filter-by-categories/FilterByCategories';
import FilterByPrice from '../filter-by-price/FilterByPrice';
import FilterByTags from "../filter-by-tags/FilterByTags";
import FiltersPanel from "../filters-panel/FiltersPanel";
import SortByPanel from "../sort-by-panel/SortByPanel";

const Filter = () => {
  const [showSortBy, setShowSortBy] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

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
      <div className="bg-white hidden md:block pr-2 lg:pr-4">
        <div className="border">
          <div className="flex justify-between items-center p-3">
            <div className="text-base text-themetextcolor font-semibold">
              {getText("Label.Filters")}:
            </div>
            <div className="">
              <button
                className="text-xs primaryThemeButton px-2 py-1 outline-none focus:outline-none"
              >
                {getText("Label.ClearAll")}
              </button>
            </div>
          </div>
          <div className="py-2 px-3">
            <FilterByCategories />
          </div>
          <div className="py-2 px-3">
            <FilterByPrice />
          </div>
          <div className="py-2 px-3">
            <FilterByTags />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <div className="fixed z-[2] bottom-0 border w-full p-2 bg-white">
          <div className="w-full grid grid-cols-2 divide-x divide-solid">
            <div 
              className="text-center text-themetextcolor hover:opacity-80 flex items-center justify-center"
						  onClick={() => setShowSortBy(true)}
            >
              <FontAwesomeIcon icon={faArrowUpWideShort} className="text-themetextcolor mr-2 text-sm" />
              {getText("Label.SortBy")}
            </div>
            <div 
              className="text-center text-themetextcolor hover:opacity-80 flex items-center justify-center"
						  onClick={() => setShowFilters(true)}
            >
              <FontAwesomeIcon icon={faSliders} className="text-themetextcolor mr-2 text-sm" />
              {getText("Label.Filters")}
            </div>
          </div>
        </div>
      </div>
      <SortByPanel 
        showSortBy={showSortBy}
        setShowSortBy={setShowSortBy}
      />
      <FiltersPanel
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />      
    </>
  )
}

export default Filter