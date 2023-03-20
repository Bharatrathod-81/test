import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import SignUp from "../pages/signup/SignUp";
import SignIn from "../pages/signin/SignIn";
import ForgotPassword from "../pages/forgot-password/ForgotPassword";
import useAuth from "../atoms/hooks/useAuth";
import VerifyEmail from "../pages/verify-email/VerifyEmail";
import { useNavigate, useSearchParams } from "react-router-dom";
import { storeToken } from "../utils/AuthUtils";

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      storeToken(token);
      setIsLoggedIn(true);
      navigate("/");
    }
  }, []);
  return <></>;
};

const PreLogin = () => {
  return (
    <div>
        <Routes>
          <Route path="/redirect" element={<Redirect />} />
          <Route
            path="/"
            element={<Navigate replace to="/login" />}
            />
          <Route
            path="*"
            element={<Navigate replace to="/login" />}
            />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify" element={<VerifyEmail />} />
        </Routes>
      </div>
  );
};

export default PreLogin;
