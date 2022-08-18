import * as yup from "yup";

import model from "./formModel";

const { email, passwordLogIn, passwordSignUp, age } = model;

export const authenthicationSchema = yup.object({
  email: yup
    .string()
    .email(email.notValidEmail)
    .max(30, email.maxLengthErrorMsg)
    .required(email.requiredEmail),
  passwordLogIn: yup.string().required(passwordLogIn.required),
  passwordSignUp: yup
    .string()
    .min(6, passwordSignUp.tooShortPassword)
    .max(30, passwordSignUp.tooLongPassword)
    .required(passwordSignUp.required),
  age: yup
    .number()
    .typeError(age.ageMustBeANumber)
    .test("len", age.tooManyCharacters, (val) => val.toString().length < 4)
    .required(age.forgetAge),
});
