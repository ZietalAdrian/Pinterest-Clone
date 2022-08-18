const formModel = {
  email: {
    name: "email",
    placeholder: "email",
    notValidEmail:"notValidEmail",
    requiredErrorMsg: "emailRequired",
    maxLengthErrorMsg: "tooLongEmail",
    requiredEmail: "requiredEmail",
  },
  passwordLogIn: {
    name: "passwordLogIn",
    placeholder: "password",
    required: "required",
  },
  passwordSignUp: {
    name: "passwordSignUp",
    placeholder: "createPassword",
    tooShortPassword: "tooShortPassword",
    tooLongPassword: "tooLongPassword",
    required: "required",
  },
  age: {
    name: "age",
    placeholder: "age",
    ageMustBeANumber: "ageMustBeANumber",
    tooManyCharacters: "tooManyCharacters",
    forgetAge: "forgetAge",
  },
};

export default formModel;
