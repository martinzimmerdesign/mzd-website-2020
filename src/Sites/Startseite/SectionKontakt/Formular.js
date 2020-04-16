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
  name: Yup.string("Gib deinen Namen ein.").required("Denk an deinen Namen."),
  email: Yup.string("Gib deine E-Mail ein.")
    .email("E-Mail braucht gültiges Format.")
    .required("Denk an deine E-Mail."),
  topic: Yup.string("Gib den Betreff ein.").required("Was ist der Betreff?"),
  message: Yup.string("Gib deine Nachricht ein.").required("Was möchtest du mir sagen?"),
  checkbox: Yup.boolean("Akzeptiere die Datenschutzerklärung").oneOf([true], "Stimm der Datenschutzerklärung zu.").required("Stimm der Datenschutzerklärung zu."),
});

const values = { name: "", email: "", topic: "", message: "", checkbox: ""};

const ErrorMessageReturn = (props) => {
    return <span className="error">{props.children}</span>;
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
      body: encode({ "form-name": "contact", ...values })
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
          <Form name="contact" data-netlify={true} >
            <motion.div variants={variants.formContainer} id="form">
              <motion.h2 variants={variants.formElements} >Kontaktformular</motion.h2>
              <motion.div variants={variants.formElements} class="display_container">
                <motion.div variants={variants.formElements} className="display_wrapper">
                  <ErrorMessage name="name" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
                  <Field type="name" name="name" placeholder="Name" component={InputElement} />
                  <ErrorMessage name="email" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
                  <Field type="email" name="email" placeholder="E-Mail Adresse" component={InputElement} />
                  <ErrorMessage name="topic" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
                  <Field type="topic" name="topic" placeholder="Betreff" component={InputElement} />
                </motion.div>
                <motion.div variants={variants.formElements} className="display_wrapper">
                  <ErrorMessage name="message" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
                  <Field type="message" name="message" placeholder="Nachricht" component={TextElement} />
                  <ErrorMessage name="checkbox" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
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
