import React from 'react';
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const InputElement = ({field, form, ...props}) =>
<div className="input_wrapper">
  <input className="input" {...field} {...props} />
</div>

export const TextElement = ({field, form, ...props}) =>
<div className="message_wrapper">
  <textarea className="input" {...field} {...props} />
</div>

export const CheckboxElement = ({ id, name, className }) =>
    <>
      <Field
        name={name}
        render={({ field, form }) => {
          return (
            <div className="checkbox_wrapper">
              <label class="container">
              <input
                type="checkbox"
                id={id}
                className={className}
                checked={field.value}
                {...field}
            />
              <span className="checkbox"></span>
              </label>
              <p>Hiermit bestätige ich die <Link to="/datenschutzerklaerung"><a>Datenschutzerklärung</a></Link> gelesen zu haben und akzeptiere diese im vollen Unfang!</p>
          </div>
          );
        }}
      />
    </>
