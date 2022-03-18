import './SignupForm.css';
import { useFormik } from 'formik';
import validationSchema from '../../validation/SignupValidation';

function Signup() {
  const {handleSubmit,handleChange,handleBlur,values,errors,touched} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      terms: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });
  return (
    <div id='signup-container'>
      <form onSubmit={handleSubmit}>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
         {errors.firstName && touched.firstName ? (
         <span>{errors.firstName}</span>):""}
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {errors.lastName && touched.lastName ? (
         <span>{errors.lastName}</span>):""}
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email ? (
         <span>{errors.email}</span>):""}
        <label>
          <input
            id="terms"
            name="terms"
            type="checkbox"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.checkbox}
          />
          {errors.terms && touched.terms ? (
         <span style={{color:"darkred"}}>I accept the Terms of Use & Privacy Policy.</span>):<span>I accept the Terms of Use & Privacy Policy.</span> }                     
        </label>         
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup