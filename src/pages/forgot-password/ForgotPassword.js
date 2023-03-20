import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import send_icon from "../../assets/images/send_icon.png";
import FormValidation from "../../components/formValidation";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

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
    if (!isValid.email) {
      // api integration
      navigate("/verify");
    }
  };

  return (
    <main>
      <div class="main-body-section sign grid">
        <aside class="left-main bg-bg-left p-5"></aside>
        <article class="right-main flex items-center">
          <div class="right-inner w-7/12 mx-auto">
            <h3 class="text-dark-green title-sign-in">Forgot password</h3>
            <p class="power-up text-gray pb-12">
              Password <span class="ames">😑</span> amnesia? Let's reset and
              remember.
            </p>
            <div class="form">
              <form>
                <div class="mb-8">
                  <input
                    class="border border-gray-100 rounded py-2 pl-3 pr-10 focus:border-gray-200 w-full focus:outline-none"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Email"
                    type="text"
                  />
                  <p class="text-red-400 pt-2  text-sm">{error.email}</p>
                </div>
              </form>
              <div class="pb-3">
                <button
                  class="rounded bg-dark-green text-white h-11 w-full font-bold flex items-center justify-center gap-x-4"
                  onClick={submitHandler}
                >
                  <span>Send Instruction</span>{" "}
                  <img src={send_icon} alt="send icon" class="h-3" />
                </button>
              </div>
              <p class="text-gray text-base text-center">
                <Link to="/login" class="">
                  <u>Back to sign in</u>
                </Link>
              </p>
              <div
                class="flex items-center mt-8 py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg"
                role="alert"
              >
                <span class="flex items-center mr-4">
                  <svg
                    class="w-4 h-4 fill-current"
                    role="button"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <i class="fa-solid fa-circle-xmark"></i>
                </span>
                <p class="text-xs">Invalied Email Id try again!</p>
              </div>
              <div
                class="flex items-center mt-8 py-3 pl-4 pr-10 leading-normal text-green-500 bg-green-100 rounded-lg"
                role="alert"
              >
                <span class="flex items-center mr-4">
                  <svg
                    class="w-4 h-4 fill-current"
                    role="button"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <i class="fa-solid fa-circle-xmark"></i>
                </span>
                <p class="text-xs">
                  Password help flying to inbox. Psst...Check spam folder!
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default ForgotPassword;
