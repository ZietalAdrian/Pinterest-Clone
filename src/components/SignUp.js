import React, { useState } from "react";
import { BsPinterest } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { t } from "i18next";
import formModel from "../utils/formModel";

const SignUp = ({
  onClose,
  formik,
  openToast,
  handleOnClickOpenModalLogin,
}) => {
  const [isFields, setIsFields] = useState(false);

  const { email, passwordSignUp, age } = formModel;

  const { handleChange, handleBlur, values, errors, touched } = formik;

  const showField = () => setIsFields(true);

  return (
    <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white z-50 min-h-[85vh] w-[484px] rounded-[2.2rem] overflow-scroll pb-4">
      <button onClick={onClose} className="absolute top-6 right-6 text-xl">
        <CgClose size={25} strokeWidth={1.4} />
      </button>
      <div className="flex flex-col mt-6 px-16 leading-8">
        <span className="text-5xl mx-auto my-2">
          <BsPinterest size={43} color="#F00028" />
        </span>
        <div className="mx-auto text-center">
          <span className="text-4xl font-medium p-1 text-gray-800 leading-10 tracking-tight">
            {t("unlimitedAccess")}
          </span>
        </div>
        <div className={`flex flex-col px-10 text-center font-light`}>
          <span className="leading-5 mb-5 px-5">{t("signUpToSeeMore")}</span>
          {!isFields ? (
            <button
              type="button"
              className="bg-red-button text-white p-2 rounded-3xl my-3"
              onClick={showField}
            >
              <span className="block leading-5 font-semibold">
                {t("continueWithEmail")}
              </span>
            </button>
          ) : (
            <form onSubmit={formik.handleSubmit} className="flex flex-col">
              <input
                type="email"
                id="email"
                name={email.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={t(email.placeholder)}
                className={`border-2 border-solid rounded-2xl p-1 pl-5 mb-1 placeholder:font-extralight placeholder:tracking-wide border-gray-300 hover:border-gray-400 focus:outline focus:outline-blue-300 focus:outline-4 focus:border-gray-300`}
              />
              {touched.email && errors.email ? (
                <p className="text-red-600 text-xs pl-1 pb-2 text-left">
                  {t(errors.email)}
                </p>
              ) : null}
              <input
                type="password"
                id="passwordSignUp"
                name="passwordSignUp"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordSignUp || ""}
                placeholder={t(passwordSignUp.placeholder)}
                className="border-2 border-solid rounded-2xl p-1 pl-5 mb-1 placeholder:font-extralight placeholder:tracking-wide border-gray-300 hover:border-gray-400 focus:outline focus:outline-blue-300 focus:outline-4 focus:border-gray-300"
              />
              {touched.passwordSignUp && errors.passwordSignUp && (
                <p className="text-red-600 text-xs pl-1 pb-2 text-left">
                  {t(errors.passwordSignUp)}
                </p>
              )}
              <input
                id="age"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age || ""}
                placeholder={t(age.placeholder)}
                className="border-2 border-solid rounded-2xl p-1 pl-5 mb-1 placeholder:font-extralight placeholder:tracking-wide border-gray-300 hover:border-gray-400 focus:outline focus:outline-blue-300 focus:outline-4 focus:border-gray-300"
              />
              {touched.age && errors.age && (
                <p className="text-red-600 text-xs pl-1 pb-2 text-left">
                  {t(errors.age)}
                </p>
              )}
              <button
                type="submit"
                className="p-1 mt-2 bg-red-button text-white rounded-3xl font-semibold hover:bg-[#d81535]"
              >
                {t("continue")}
              </button>
              <span className="my-3 font-semibold text-sm">LUB</span>
            </form>
          )}
          <button
            type="button"
            onClick={openToast}
            className="p-1 mb-2 max-h-10 bg-blue-500 text-white rounded-3xl font-bold truncate flex"
          >
            <span className="pl-1 pt-1">
              <RiFacebookCircleFill size={25} />
            </span>
            {t("continueFacebook")}
          </button>
          <button
            type="button"
            onClick={openToast}
            className="p-2 rounded-3xl truncate border-[1px] text-sm font-medium flex border-gray-300"
          >
            <span className="px-1">
              <FcGoogle size={22} />
            </span>
            {t("continueGoogle")}
          </button>
          <p className="mt-4 text-center text-xs font-thin">
            {t("terms_1")}{" "}
            <span className="cursor-pointer hover:underline font-semibold">
              {t("terms_2")}
            </span>{" "}
            {t("terms_3")}{" "}
            <span className="cursor-pointer hover:underline font-semibold">
              {t("terms_4")}
            </span>{" "}
            {t("terms_5")}
          </p>
        </div>
      </div>
      <div className="text-center flex flex-col font-semibold text-xs mt-8">
        <button
          type="button"
          onClick={handleOnClickOpenModalLogin}
          className="font-semibold text-xs mb-3"
        >
          {t("alreadyMember")}
        </button>
        <span>
          {t("areYouBusiness")}{" "}
          <button type="button" className="font-semibold text-xs">
            {t("startHere")}
          </button>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
