import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().matches(/^[A-Za-z ]*$/, "Only alphabets are allowed for this field ").required("Required"),
    email: Yup.string().email("Must be a valid email").required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
        setIsSubmitted(true);
        
        console.log(values);
        
        resetForm();
        setSubmitting(false);
  }});

  const getFormikValidationErrorHandler = (formik) => (name) =>
    formik.touched[name] && formik.errors[name] ? (
      <div className="formError">
        <span className="">{formik.errors[name]}</span>
      </div>
    ) : null;

  const handleValidationError = getFormikValidationErrorHandler(formik);

  return (
    <div className="formWrapper">
      <h3 className="formNotice">
        {isSubmitted
          ? "Thank you! Check your email to get discount!"
          : "Fill the form down bellow to get discount  for first order"}
      </h3>
      <form onSubmit={formik.handleSubmit} className="formContainer">
        <label htmlFor="firstName" className="formLabel">Enter your Name</label>
        <input
          name="name"
          placeholder="Jane"
          className="formInput"   
          {...formik.getFieldProps("name")}
        />
        {handleValidationError("name")}

        <label htmlFor="email" className="formLabel">Enter your email</label>
        <input
          name="email"
          placeholder="example@gmail.com"
          className="formInput"
          {...formik.getFieldProps("email")}
        />
        {handleValidationError("email")}

        <div className="formBtnPlace"><button type="submit" className="formBtn">Submit</button></div>
      </form>
    </div>
  );
}

export default Form;
