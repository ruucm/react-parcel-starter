import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";

const renderField = ({
  input,
  label,
  placeholder,
  type,
  width,
  nomargin,
  meta: { touched, error }
}) => (
  <div>
    {label && <label>{label}</label>}
    <input {...input} placeholder={placeholder} type={type} width={width} />
  </div>
);

const TestReduxFormComp = ({
  // redux-form
  history,
  error,
  pristine,
  reset,
  handleSubmit,
  submitting,

  ...props
}) => {
  return (
    <div>
      TestReduxFormComp
      <form
        onSubmit={handleSubmit(values => {
          if (validate(values)) {
            console.log("it is valid");
          }
        })}
      >
        <Field
          name="phone"
          type="text"
          label="전화번호"
          placeholder="010-1234-5678"
          width={200}
          component={renderField}
        />
        {error && "error!"}
        <button type="submit">submit button</button>
      </form>
    </div>
  );
};

export const TestReduxForm = reduxForm({
  form: "TEST_REDUX_FORM"
})(TestReduxFormComp);
