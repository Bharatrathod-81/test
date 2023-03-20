import React, { useState } from "react";
import FormValidation from "../../components/formValidation";
import {
  GOOGLE_SIGN_IN_PATH,
  FACEBOOK_SIGN_IN_PATH,
  TWITTER_SIGN_IN_PATH,
} from "../../constants/AppConstants";
import Fb_icon from "../../assets/images/fb_icon.png";
import Google_icon from "../../assets/images/google_icon.png";
import Ms_icon from "../../assets/images/ms_icon.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    if (Object.keys(error).length) {
      setError(FormValidation(newValues));
    }
  };

  const submitHandler = () => {
    const isValid = FormValidation(values);
    setError(isValid);
    if (!(isValid.email || isValid.password)) {
      // api integration
    }
  };

  const onClickGoogle = () => {
    window.location.href = GOOGLE_SIGN_IN_PATH;
  };

  const onClickFacebook = () => {
    window.location.href = FACEBOOK_SIGN_IN_PATH;
  };

  const onClickMicrosoft = () => {
    window.location.href = TWITTER_SIGN_IN_PATH;
  };

  return (
    <main>
      <div class="main-body-section sign grid">
        <aside class="left-main bg-bg-left p-5"></aside>
        <article class="right-main mx-auto flex items-center w-full">
          <div class="right-inner w-9/12 mx-auto px-12">
            <h3 class="text-dark-green title-sign-in">Sign in</h3>
            <p class="power-up text-gray pb-10">
              Let's <span class="ames">💪</span> power up your meeting!
            </p>
            <div class="other-network pb-8">
              <div class="fb" onClick={onClickFacebook}>
                <img src={Fb_icon} height="32" alt="FB icon" />
                <span>Facebook</span>
              </div>
              <div class="gg" onClick={onClickGoogle}>
                <img src={Google_icon} height="32" alt="GG icon" />
                <span>Google</span>
              </div>
              <div class="ms" onClick={onClickMicrosoft}>
                <img src={Ms_icon} height="32" alt="MS icon" />
                <span>Microsoft</span>
              </div>
            </div>
            <div class="OR-Line mb-5 ">
              <h2>
                <span>(or)</span>
              </h2>
            </div>
            <div class="form">
              <form>
                <div class="mb-4">
                  <input
                    class="border border-gray-100 rounded py-2 pl-3 pr-10 focus:border-gray-200 w-full focus:outline-none"
                    placeholder="Email"
                    type="text"
                    name="email"
                    onChange={changeHandler}
                  />
                  <span class="inline-flex text-sm text-red-600">
                    {error.email}
                  </span>
                </div>
                <div class="mb-4">
                  <input
                    class="border border-gray-100 rounded py-2 pl-3 pr-10 focus:border-gray-200 w-full focus:outline-none"
                    placeholder="Password"
                    type="text"
                    name="password"
                    onChange={changeHandler}
                  />
                  <span class="inline-flex text-sm text-red-600">
                    {error.password}
                  </span>
                </div>
                <div class="mb-4 flex justify-between align-middle">
                  <div class="Remember flex items-center gap-2 mb-5">
                    <input
                      class="border border-gray-100 enabled:hover:border-gray-100 rounded py-2 pl-3 pr-10 focus:outline-none outline-none h-5 w-5"
                      placeholder="Password"
                      type="checkbox"
                    />{" "}
                    <span class="text-gray">Remember me</span>
                  </div>
                  <div class="forgot-pwd">
                    <Link to="/forgot-password" class="text-gray">
                      <u>Forgot password?</u>
                    </Link>
                  </div>
                </div>
              </form>
              <div class="flex mb-3">
                <button
                  onClick={submitHandler}
                  class="rounded bg-dark-green text-white h-12 w-full flex justify-center items-center "
                >
                  Sign in
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mx-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
              <p class="text-gray text-center text-base">
                Don't have an account?{" "}
                <Link to="/sign-up" class="">
                  <b>
                    <u>Sign up for FREE</u>
                  </b>
                </Link>
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default SignIn;
