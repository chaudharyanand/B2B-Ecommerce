import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllTranslatedTexts } from '../../features/translate/translate-slice';

const FilterByPrice = () => {
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
        {getText("Label.PriceRange")}
      </div>
      <div className="pt-2">
        <div className="flex mb-2 w-full">
          <div className="flex items-center w-full">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
            />
            <div className="ml-3 text-sm flex items-center justify-between w-full">
              <label htmlFor="comments" className="text-themetextcolor hover:text-themecolor cursor-pointer select-none">
                0 - 100
              </label>
            </div>
          </div>
        </div>
        <div className="flex mb-2 w-full">
          <div className="flex items-center w-full">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
            />
            <div className="ml-3 text-sm flex items-center justify-between w-full">
              <label htmlFor="comments" className="text-themetextcolor hover:text-themecolor cursor-pointer select-none">
                100 - 200
              </label>
            </div>
          </div>
        </div>
        <div className="flex mb-2 w-full">
          <div className="flex items-center w-full">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
            />
            <div className="ml-3 text-sm flex items-center justify-between w-full">
              <label htmlFor="comments" className="text-themetextcolor hover:text-themecolor cursor-pointer select-none">
                200 - 300
              </label>
            </div>
          </div>
        </div>
        <div className="flex mb-2 w-full">
          <div className="flex items-center w-full">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="rounded border-gray-300 text-checkboxbgcolor ring-0 focus:ring-0 cursor-pointer"
            />
            <div className="ml-3 text-sm flex items-center justify-between w-full">
              <label htmlFor="comments" className="text-themetextcolor hover:text-themecolor cursor-pointer select-none">
                300 - 400
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterByPrice