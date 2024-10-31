import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllTranslatedTexts } from '../../features/translate/translate-slice';

const FilterByTags = () => {
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
      <div className="text-sm text-themetextcolor font-semibold pb-1 border-b border-gray-200">
        {getText("Label.Tags")}
      </div>
      <div className="pt-2">
        <div className="inline-flex flex-wrap">
          <a href="" className="px-2 py-1 m-1 text-sm border text-gray-400 hover:text-themecolor hover:border-themecolor rounded">
            Almond
          </a>
          <a href="" className="px-2 py-1 m-1 text-sm border text-gray-400 hover:text-themecolor hover:border-themecolor rounded">
            Banana
          </a>
          <a href="" className="px-2 py-1 m-1 text-sm border text-gray-400 hover:text-themecolor hover:border-themecolor rounded">
            Juice
          </a>
          <a href="" className="px-2 py-1 m-1 text-sm border text-gray-400 hover:text-themecolor hover:border-themecolor rounded">
            Tomato
          </a>
          <a href="" className="px-2 py-1 m-1 text-sm border text-gray-400 hover:text-themecolor hover:border-themecolor rounded">
            Blackberry
          </a>
          <a href="" className="px-2 py-1 m-1 text-sm border text-gray-400 hover:text-themecolor hover:border-themecolor rounded">
            Onion
          </a>
          <a href="" className="px-2 py-1 m-1 text-sm border text-gray-400 hover:text-themecolor hover:border-themecolor rounded">
            Cashews
          </a>
          <a href="" className="px-2 py-1 m-1 text-sm border text-gray-400 hover:text-themecolor hover:border-themecolor rounded">
            Grapes
          </a>

        </div>
      </div>
    </>
  )
}

export default FilterByTags