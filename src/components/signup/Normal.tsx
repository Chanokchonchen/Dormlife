import React from "react";
import { Formik, Form , Field } from "formik";
import * as Yup from "yup";
import { phoneRegExp, gender } from "./constant";
import { TextInput, RadioInput ,Checkbox } from "./FormComponents";
function Normal() {
  return (
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        phone: "",
        email: "",
        password: "",
        confirmpassword: "",
        sex: "male",
        acceptTerm : false
      }}
      validationSchema={Yup.object({
        name: Yup.string().required("Required"),
        lastname: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        phone: Yup.string()
            .matches(phoneRegExp, "Phone number is not valid")
            .max(10, "Invalid phone number"),
        password: Yup.string().min(6, "Too short").required("Required"),
        confirmpassword: Yup.string()
            .min(6, "Too short")
            .required("Required")
            .oneOf([Yup.ref("password")], "Passwords must match"),
        sex: Yup.string()
            .required("Required"),
        acceptTerm : Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
      })}
      onSubmit={(values) => {
        const val = {
          name: values.name,
          lastname: values.lastname,
          email: values.email,
          phone: values.phone,
          password: values.password,
          sex : values.sex,
          acceptTerm : values.acceptTerm
        };
        alert(JSON.stringify(val));
      }}
    >
      <Form>
        <TextInput label="Name" name="name" type="text" />
        <TextInput label="Lastname" name="lastname" type="text" />
        <TextInput label="Email" name="email" type="email" />
        <TextInput label="Phone number" name="phone" type="text" />
        <TextInput label="Password" name="password" type="password" />
        <TextInput label="Confirm password" name="confirmpassword" type="password"/>
        <RadioInput gender={gender} name="Gender"/><br/>
        <Checkbox label="I agree to the " name="acceptTerm" type="checkbox" /><br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
export default Normal;
