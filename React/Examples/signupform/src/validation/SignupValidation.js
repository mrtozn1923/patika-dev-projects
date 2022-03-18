import * as yup from 'yup';

let validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  terms: yup.boolean().oneOf([true]),
});

export default validationSchema;