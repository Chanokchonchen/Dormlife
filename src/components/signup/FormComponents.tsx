import React from "react";
import { useField, Field } from "formik";
import { propRadioInput, propTextInput , propCheckBoxInput } from "./typeForm";

export function TextInput(props: propTextInput) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label style={props.styleLabel} className={props.classNameLabel} htmlFor={props.name}>{props.label}</label>
      <input style={props.styleinput} className={props.classNameInput}  {...field} {...props} />
      {meta.touched && meta.error ? <div style={props.styleerror} className={props.classNameError} >{meta.error}</div> : null}
    </div>
  );
}
export function RadioInput(props: {gender : propRadioInput[],name : string}) {
  return (
    <div>
    <label>{props.name}</label><br />
      {props.gender.map((prop, index) => {
        return (
          <label>
            <Field type="radio" name={prop.name} value={prop.value} />
            {prop.label}
          </label>
        );
      })}
    </div>
  );
}
export function Checkbox(props: propCheckBoxInput)  {
    const [field, meta] = useField(props);
    return (
      <>
        <label className="checkbox">
          <input {...field} {...props} type="checkbox" />
          {props.label}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
  export function TermCondition(props: propCheckBoxInput)  {
    const [field, meta] = useField(props);
    return (
      <>
        <label className="checkbox">
          <input {...field} {...props} type="checkbox" />
          {props.label}
        </label>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </>
    );
  };
