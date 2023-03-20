import React from "react";
import { useAtom } from "jotai";
import { loginAtom } from "../authAtom";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(loginAtom);
  return { isLoggedIn, setIsLoggedIn };
};

export default useAuth;
