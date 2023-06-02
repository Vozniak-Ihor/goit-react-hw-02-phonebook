import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { FormContainer, FormLabelName, FormInputName, FormInputTel,  FormButton, ErrorText } from "./LodForm.styled";

const schema = yup.object().shape({
  name: yup.string().required("Ім'я обов'язкове"),
  phoneNumber: yup.string().matches(/^(\+?3?8)?(0\d{9})$/, '+380XXXXXXXXX').required("Номер телефону обов'язковий"),
});

const initialValues = {
  name: '',
  phoneNumber: '',
};

class LoginForm extends Component {
  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.props.onSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <label>
            Name
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </label>

          <label>
            Number
            <Field type="tel" name="phoneNumber" />
            <ErrorMessage name="phoneNumber" component="div" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.exact({
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }),
};
