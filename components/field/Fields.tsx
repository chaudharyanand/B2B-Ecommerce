import { faAngleDown, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const TextFieldComponent = ({ field, form, ...props }: any) => {
  const displayLabel = props.displayLabel;
  const labelText = props.labelText;
  delete props.displayLabel;
  delete props.labelText;

  return (
    <>
      {displayLabel ? (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-600 2xl:text-lg"
        >
          {labelText}
        </label>
      ) : null}

      <input
        type="text"
        {...field}
        {...props}
        className="block w-full px-3 py-1.5 text-base font-normal text-inputtext bg-inputbgcolor bg-clip-padding 
                    border border-solid border-gray-300 rounded transition ease-in-out m-0 
                    focus:text-inputfocus focus:bg-inputbgcolor focus:border-inputfocus focus:outline-none"
      />
    </>
  );
};

export const ApplyCouponTextFieldComponent = ({
  field,
  form,
  ...props
}: any) => {
  const displayLabel = props.displayLabel;
  const labelText = props.labelText;
  const placeholder = props.placeholder;
  delete props.displayLabel;
  delete props.labelText;
  delete props.placeholder;

  return (
    <>
      {displayLabel ? (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-600"
        >
          {labelText}
        </label>
      ) : null}

      <input
        type="text"
        {...field}
        {...props}
        placeholder={placeholder}
        className="block w-full px-3 py-1.5 text-base font-normal text-inputtext bg-inputbgcolor bg-clip-padding 
                    border border-solid border-gray-300 rounded transition ease-in-out m-0 
                    focus:text-inputfocus focus:bg-inputbgcolor focus:border-inputfocus focus:outline-none"
      />
    </>
  );
};

export const EmailFieldComponent = ({ field, form, ...props }: any) => {
  const displayLabel = props.displayLabel;
  const labelText = props.labelText;
  delete props.displayLabel;
  delete props.labelText;

  return (
    <>
      {displayLabel ? (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-600 2xl:text-lg"
        >
          {labelText}
        </label>
      ) : null}

      <input
        type="email"
        {...field}
        {...props}
        className="block w-full px-3 py-1.5 text-bold font-normal text-inputtext bg-inputbgcolor bg-clip-padding 
                  border border-solid border-gray-300 rounded transition ease-in-out m-0 
                  focus:text-inputfocus focus:bg-inputbgcolor focus:border-inputfocus focus:outline-none"
      />
    </>
  );
};

export const NumberFieldComponent = ({ field, form, ...props }: any) => {
  return (
    <input
      type="number"
      {...field}
      {...props}
      className="block w-full px-3 py-1.5 text-bold font-normal text-inputtext bg-inputbgcolor bg-clip-padding 
                 border border-solid border-gray-300 rounded transition ease-in-out m-0 
                 focus:text-inputfocus focus:bg-inputbgcolor focus:border-inputfocus focus:outline-none"
    />
  );
};

export const DateFieldComponent = ({ field, form, ...props }: any) => {
  return (
    <input
      type="date"
      {...field}
      {...props}
      className="block w-full px-3 py-1.5 text-bold font-normal text-inputtext bg-inputbgcolor bg-clip-padding 
                 border border-solid border-gray-300 rounded transition ease-in-out m-0 
                 focus:text-inputfocus focus:bg-inputbgcolor focus:border-inputfocus focus:outline-none"
    />
  );
};

export const TimeFieldComponent = ({ field, form, ...props }: any) => {
  return (
    <>
      {props.displayLabel ? (
        <label
          htmlFor={props.id}
          className="block text-sm font-medium text-gray-600"
        >
          {props.labelText}
        </label>
      ) : null}

      <input
        type="time"
        {...field}
        {...props}
        className="block w-full px-3 py-1.5 text-bold font-normal text-inputtext bg-inputbgcolor bg-clip-padding 
                  border border-solid border-gray-300 rounded transition ease-in-out m-0 
                  focus:text-inputfocus focus:bg-inputbgcolor focus:border-inputfocus focus:outline-none"
      />
    </>
  );
};

export const CheckboxFieldComponent = ({ field, form, ...props }: any) => {
  return (
    <>
      <input
        type="checkbox"
        {...field}
        {...props}
        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-inputbgcolor 
                 checked:bg-checkboxbgcolor checked:border-checkboxbgcolor focus:outline-none transition duration-200 
                 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
      />
      <label
        className="text-inputtext cursor-pointer select-none 2xl:text-lg hover:text-themecolor"
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </>
  );
};

export const RadioFieldComponent = ({ field, form, ...props }: any) => {
  return (
    <>
      <input
        type="radio"
        {...field}
        {...props}
        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-inputbgcolor
               checked:bg-inputtext checked:border-inputtext focus:outline-none transition duration-200
                 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
      />
      <label
        className="text-inputtext hover:font-semibold cursor-pointer select-none"
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </>
  );
};

export const SelectFieldComponent = ({ field, form, ...props }: any) => {
  const options = props.options || [];
  const label = props.label || "Select an option";
  const otherProps = { ...props };
  delete otherProps.label;
  delete otherProps.options;

  const displayLabel = props.displayLabel;
  const labelText = props.labelText;
  delete props.displayLabel;
  delete props.labelText;

  const getSelectedOption = () => {
    let selectedOption = options.filter(
      (option: any) => option.value === form.values[field.name]
    );
    return selectedOption.length ? selectedOption[0].label : undefined;
  };

  return (
    <Listbox
      {...field}
      {...otherProps}
      onChange={(selected: any) => form.setFieldValue(field.name, selected)}
    >
      {({ open }: any) => (
        <>
          {displayLabel ? (
            <Listbox.Label className="block text-sm font-medium text-inputtext pl-1">
              {labelText}
            </Listbox.Label>
          ) : null}
          <div className="relative">
            <Listbox.Button
              className="relative w-full cursor-default rounded border border-gray-300 bg-inputbgcolor 
                                      py-2 pl-3 pr-10 text-gray-400 text-left shadow-sm 
                                      focus:border-inputfocus focus:text-inputfocus focus:outline-none focus:ring-1 focus:ring-inputfocus sm:text-sm"
            >
              <span
                className={classNames(
                  getSelectedOption() ? "text-inputtext" : "",
                  "block truncate"
                )}
              >
                {getSelectedOption() || label}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-inputbgcolor py-1 
                                          text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                {options.map((element: any, index: number) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }: any) =>
                      classNames(
                        active ? "text-white bg-inputfocus" : "text-inputtext",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={element.value}
                  >
                    {({ selected, active }: any) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {element.label}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-inputfocus",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export const NativeSelectFieldComponent = ({ field, form, ...props }: any) => {
  const options = props.options || [];
  const label = props.label || "Select an option";
  const otherProps = { ...props };
  delete otherProps.label;
  delete otherProps.options;

  return (
    <select
      {...field}
      {...otherProps}
      className="block w-full px-3 py-1.5 text-base font-normal text-inputtext bg-inputbgcolor bg-clip-padding 
                border border-solid border-gray-300 rounded transition ease-in-out m-0 
                focus:text-inputfocus focus:bg-inputbgcolor focus:border-inputfocus focus:outline-none"
    >
      <option value="" disabled>
        {label}
      </option>
      {options.map((element: any, index: number) => (
        <option key={index} value={element.value}>
          {element.label}
        </option>
      ))}
    </select>
  );
};

export const TextAreaFieldComponent = ({ field, form, ...props }: any) => {
  return (
    <textarea
      {...field}
      {...props}
      className="block w-full px-3 py-1.5 text-base font-normal text-inputtext bg-inputbgcolor bg-clip-padding 
                 border border-solid border-gray-300 rounded transition ease-in-out m-0 
                 focus:text-inputfocus focus:bg-inputbgcolor focus:border-inputfocus focus:outline-none"
    ></textarea>
  );
};

export const ErrorMessageComponent = (error: any) => {
  return <span className="text-sm text-red-400">{error.children}</span>;
};
