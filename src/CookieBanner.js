import { useRef, useState } from "react";

const CookieBanner = ({ setshow }) => {
  const ref = useRef(null);
  const hidebannar = () => {
    ref.current.style.transition = "all 1s";
    ref.current.style.opacity = "0";
    setTimeout(() => {
      setshow((sh) => !sh);
    }, 1000);
  };
  return (
    <>
      <div ref={ref} className="banner">
        <button style={{ padding: "0.5rem" }} onClick={hidebannar}>
          x
        </button>
      </div>
    </>
  );
};

export default CookieBanner;
