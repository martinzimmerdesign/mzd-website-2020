import React from 'react';
import Button from 'Components/Buttons/Button.js';
import './KontaktFormular.css';
import { InputElement, TextElement, CheckboxElement } from './FormElements.js';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from "framer-motion";
import ease from 'Styles/Transitions.js';

const variants = {
            formContainer: {
              enter: {
                transition: {
                  staggerChildren: 0.4,
                }
              },
              exit: {
                transition: {
                }
              }
            },
            formElements: {
              enter: {
                y: 0,
                opacity: 1,
            },
              exit: { y: 50, opacity: 0 }
            },
        };

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Wie heißt du?"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  topic: Yup.string("Enter a name").required("Was ist der Betreff?"),
  message: Yup.string("Enter a message").required("Was ist der message?"),
  checkbox: Yup.boolean("Enter a checkbox").oneOf([true], "sefef").required("Was ist der checkbox?"),
});

const values = { name: "", email: "", topic: "", message: "", checkbox: ""};

const ErrorMessageReturn = (msg) => {
    return <span className="error">{msg}</span>;
};

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Formular = () => (
  <div>
    <Formik
      initialValues={values}
      validationSchema={validationSchema}
      onSubmit={
  (values, actions) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-demo", ...values })
    })
    .then(() => {
      alert('Success');
      actions.resetForm()
    })
    .catch(() => {
      alert('Error');
    })
    .finally(() => actions.setSubmitting(false))
  }
}
    >
      {({ isSubmitting }) => (
          <Form name="contact-demo" data-netlify={true} >
          <motion.div variants={variants.formContainer} id="form">
            <motion.h2 variants={variants.formElements} >Kontaktformular</motion.h2>
            <motion.div variants={variants.formElements} class="display_container">
              <motion.div variants={variants.formElements} className="display_wrapper">
                <ErrorMessage name="name" render={msg => <span className="error">{msg}</span>} />
                <Field type="name" name="name" placeholder="Name" component={InputElement} />

                <ErrorMessage name="email" render={msg => <span className="error">{msg}</span>} />
                <Field type="email" name="email" placeholder="E-Mail Adresse" component={InputElement} />

                <ErrorMessage name="topic" render={msg => <span className="error">{msg}</span>} />
                <Field type="topic" name="topic" placeholder="Betreff" component={InputElement} />
              </motion.div>
              <motion.div variants={variants.formElements} className="display_wrapper">
                <ErrorMessage name="message" render={msg => <span className="error">{msg}</span>} />
                <Field type="message" name="message" placeholder="Nachricht" component={TextElement} />

                <ErrorMessage name="checkbox" render={msg => <span className="error">{msg}</span>} />
                <CheckboxElement name="checkbox" className="checkbox" />
              </motion.div>
          </motion.div>

          <motion.div variants={variants.formElements} className="submit_button_container">
            <div className="button submit">
                <button type="submit" disabled={isSubmitting}>Senden</button>
                <span className="button-panel button-back"></span>
                <span className="button-panel button-front"></span>
            </div>
          </motion.div>
        </motion.div>
        </Form>
      )}
    </Formik>
  </div>
);

export default Formular;
