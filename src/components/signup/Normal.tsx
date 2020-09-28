import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles, createStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Termservice from "./Termservice";
import { phoneRegExp } from "./constant";
import { propsNormalForm } from "./typeForm";

/* Add CSS to styles 
Ex 
Normal css
.black {
  color = "black"
}
CSS with createStyles
black: {
  color:"black"
}
*/

const styles = createStyles({
  black: {
    color: "black",
  },
  button: {
    margin:"10px"
  }
});

function Normal(props: any) {
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Sign up Normal User</h1>
        <TextField
          id="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.name ? errors.name : ""}
          error={touched.name && Boolean(errors.name)}
          margin="dense"
          variant="outlined"
        />
        <br />
        <TextField
          id="lastName"
          label="Last Name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.lastName ? errors.lastName : ""}
          error={touched.lastName && Boolean(errors.lastName)}
          margin="dense"
          variant="outlined"
        />
        <br />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email ? errors.email : ""}
          error={touched.email && Boolean(errors.email)}
          margin="dense"
          variant="outlined"
        />
        <br />
        <TextField
          id="phone"
          label="Phone Number"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.phone ? errors.phone : ""}
          error={touched.phone && Boolean(errors.phone)}
          margin="dense"
          variant="outlined"
        />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password ? errors.password : ""}
          error={touched.password && Boolean(errors.password)}
          margin="dense"
          variant="outlined"
        />
        <br />
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.confirmPassword ? errors.confirmPassword : ""}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          margin="dense"
          variant="outlined"
        />
        <br />
        <br />
        <FormControl component="fieldset">
          <FormLabel className={classes.black}>Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={values.gender}
            onChange={handleChange}
          >
            <span>
              <FormControlLabel
                value="female"
                control={<Radio color="primary" />}
                label="Female"
              />{" "}
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="Male"
              />
            </span>
          </RadioGroup>
        </FormControl>
        <br />
        <Checkbox
          checked={values.acceptTerm}
          onChange={handleChange}
          onBlur={handleBlur}
          name="acceptTerm"
          color="primary"
        />
        <FormLabel className={classes.black}>
          I have to read and agree to{" "}
        </FormLabel>{" "}
        <Termservice />
        <FormHelperText error={true}>
          {touched.acceptTerm ? errors.acceptTerm : ""}
        </FormHelperText>
        <br />
        <Button className={classes.button} variant="outlined" type="submit" color="primary" disabled={isSubmitting}>
          SUBMIT
        </Button>
        <Button className={classes.button} variant="outlined" color="secondary" onClick={handleReset}>
          CLEAR
        </Button>
      </form>
    </div>
  );
}
const NormalForm = withFormik({
  mapPropsToValues: ({
    name,
    lastName,
    email,
    password,
    confirmPassword,
    phone,
    gender,
    acceptTerm,
  }: propsNormalForm) => {
    return {
      name: name || "",
      lastName: lastName || "",
      email: email || "",
      password: password || "",
      confirmPassword: confirmPassword || "",
      gender: gender || "male",
      acceptTerm: acceptTerm || false,
      phone: phone || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .required("Enter your password"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password does not match"),
    acceptTerm: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
    gender: Yup.string().required("Required"),
    phone: Yup.string().matches(phoneRegExp, "Invalid phone number"),
  }),

  handleSubmit: (values, { resetForm }) => {
    const { name, lastName, email, password, phone, gender } = values;
    const form = {
      name,
      lastName,
      email,
      password,
      phone,
      gender,
    };
    setTimeout(()=> {
      alert(JSON.stringify(form));
    },1000)
    resetForm();
  },
})(Normal);

export default withStyles(styles)(NormalForm);
