import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";
import "./login.css";

import { motion } from "framer-motion";

export const LoginScreen = () => {
  const [stateForm, handleInputChange] = useForm({
    name: "",
  });

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const { name } = stateForm;

  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name,
      },
    });

    const lastPath = localStorage.getItem("lastPath") || "/search";
    const search = localStorage.getItem("search") || "";


    navigate(lastPath + search, { replace: true });
  };

  return (
    <div className="login-screen">
      <motion.h1
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="intro"
      >
        Heroes
      </motion.h1>

      <motion.div
        animate={{ y: 0 }}
        initial={{ y: 100 }}
        transition={{ duration: 1 }}
        className="name-container"
      >
        <input
          name="name"
          placeholder="Wazz your hero name?"
          value={name}
          onChange={handleInputChange}
          className="search-input"
          type="text"
        />
        <div className="bubble"></div>
      </motion.div>

      <motion.button
        animate={{ y: 0 }}
        initial={{ y: 100 }}
        transition={{ duration: 1.1 }}
        disabled={name?.trim().length ? false : true}
        className="btn btn-login"
        onClick={handleLogin}
      >
        Login
      </motion.button>
    </div>
  );
};
