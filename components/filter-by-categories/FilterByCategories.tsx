import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllTranslatedTexts } from '../../features/translate/translate-slice';
import { CheckboxFieldComponent } from '../field/Fields';
import { Field,} from 'formik';

const FilterByCategories = () => {
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
        {getText("Label.Categories")}
      </div>
      <div className="pt-2">
        {/* <div className="">
          <Field 
            component={CheckboxFieldComponent}
            id="fruits"
          />
          <label
            htmlFor="fruits"
            className="cursor-pointer"
          >
            Fruits
          </label>
        </div> */}
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
                Green Searfood
              </label>
              <div className="text-sm text-themetextcolor">
                (19)
              </div>
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
                Green Searfood
              </label>
              <div className="text-sm text-themetextcolor">
                (19)
              </div>
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
                Green Searfood
              </label>
              <div className="text-sm text-themetextcolor">
                (19)
              </div>
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
                Green Searfood
              </label>
              <div className="text-sm text-themetextcolor">
                (19)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterByCategories