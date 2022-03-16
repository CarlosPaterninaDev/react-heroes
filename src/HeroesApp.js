import React, { useEffect, useReducer } from "react";
import { AppRouter } from "./routers/AppRouter";
import { AuthContext } from "./auth/authContext";
import "./app.css";
import { authReducer } from "./auth/auth.reducer";

const init = () => {
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  return (
    <div className="container">
      <AuthContext.Provider
        value={{
          user,
          dispatch,
        }}
      >
        <AppRouter />
      </AuthContext.Provider>
    </div>
  );
};
