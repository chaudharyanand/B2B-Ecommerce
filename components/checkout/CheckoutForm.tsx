import { Field, Form, Formik } from 'formik';
import React from 'react'
import translate from '../../pages/api/translate';
import { SelectFieldComponent } from '../field/Fields';

const CheckoutForm = () => {
  return (
    <>
    <Formik>
      {(formikProps: any) => (
        <Form>
          <div className="bg-gray-100">
            <div className="p-4">
              <div className="py-3">
                Shipping Info
              </div>
              <div className="py-3">
                <Field
                  id=""
                  name=""
                  required
                  component={SelectFieldComponent}
                  label={`Something`}
                />
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
    </>
  )
}

export default CheckoutForm;