import React, { useEffect, useRef, useState } from "react";
import "../../css/dist/output.css";
import send_icon from "../../assets/images/send_icon.png";

const VerifyEmail = () => {
  const [code, setCode] = useState(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const inputRef = useRef(null);

  const changeHandler = ({ target }, idx) => {
    const { value } = target;
    const newOTPArray = [...code];
    newOTPArray[idx] = value.substring(value.length - 1);

    if (!value) {
      setActiveOTPIndex(idx - 1);
    } else {
      setActiveOTPIndex(idx + 1);
    }
    setCode(newOTPArray);

    if (value.length > 1 && idx !== 3) {
      const pasteOTP = code.map((e, i) => (value[i] ? value[i] : e));
      setCode(pasteOTP);
      setActiveOTPIndex(value.length);
      if (value.length === 4) setActiveOTPIndex(3);
    }
  };

  const handleOnKeyDown = ({ key }, idx) => {
    if (key === "Backspace") {
      setActiveOTPIndex(idx - 1);
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOTPIndex]);

  const clickHandler = () => {
    const otp = code;
    if (otp[0] && otp[1] && otp[2] && otp[3]) {
      // api integration
    }
  };

  return (
    <main>
      <div class="main-body-section sign grid">
        <aside class="left-main bg-bg-left p-5"></aside>
        <article class="right-main flex items-center">
          <div class="right-inner w-7/12 mx-auto">
            <h3 class="text-dark-green title-sign-in">Verify email</h3>
            <p class="power-up text-gray pb-8">
              Get ready to Huddle! Email <span class="ames">✅</span> verify to
              join.
            </p>
            <p class="power-up text-gray pb-24">Confirmation code</p>
            <div class="form">
              <form>
                <div class="flex gap-x-4">
                  {code.map((e, i) => (
                    <input
                      key={i}
                      ref={i === activeOTPIndex ? inputRef : null}
                      class="border-b-2 text-center border-gray-100 py-2 pl-3 pr-10 focus:border-gray-200 w-full focus:outline-none"
                      type="number"
                      onChange={(e) => changeHandler(e, i)}
                      onKeyDown={(e) => handleOnKeyDown(e, i)}
                      value={code[i]}
                    />
                  ))}
                </div>
                <p class="text-red-400 pt-2 pb-8 text-sm">
                  Code mismatch alert! Don't give up, try again!
                </p>
              </form>
              <div class="pb-3">
                <button
                  onClick={clickHandler}
                  class="rounded bg-dark-green text-white h-12 w-full font-bold flex items-center justify-center gap-x-4"
                >
                  <span>Verify</span>
                  <img src={send_icon} alt="send icon" class="h-3" />
                </button>
              </div>
              <p class="text-gray text-sm text-center">
                Can't find the code? Check the spam folder or{" "}
                <a href="#" class="">
                  <u>Resend code</u>
                </a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default VerifyEmail;
