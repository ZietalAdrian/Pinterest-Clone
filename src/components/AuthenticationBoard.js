import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";

import { authenthicationSchema } from "../utils/validationSchema";

import Login from "./Login";
import SignUp from "./SignUp";

const AuthenticationBoard = ({
  open,
  onClose,
  login,
  openToast,
  handleOnClickOpenModalLogin,
  handleOnClickOpenModalSingIn,
}) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authenthicationSchema,
    onSubmit: () => {
      openToast();
    },
  });

  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-50"
      />
      {login ? (
        <Login
          onClose={onClose}
          formik={formik}
          openToast={openToast}
          handleOnClickOpenModalSingIn={handleOnClickOpenModalSingIn}
        />
      ) : (
        <SignUp
          onClose={onClose}
          formik={formik}
          openToast={openToast}
          handleOnClickOpenModalLogin={handleOnClickOpenModalLogin}
        />
      )}
    </>,
    document.getElementById("portal")
  );
};

export default AuthenticationBoard;
