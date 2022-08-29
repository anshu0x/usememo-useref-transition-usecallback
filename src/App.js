// usememo

// import React, { useState, useMemo } from "react";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);

//   const theme = {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//   };
//   const slowfunction = (num) => {
//     console.log("slow ss");
//     for (let i = 0; i < 100000000; i++) {}
//     return num * 2;
//   };
//   const doubleNumber = useMemo(() => {
//     return slowfunction(number);
//   }, [number]);
//   return (
//     <div>
//       <input
//         type="text"
//         value={number}
//         onChange={(e) => setNumber(e.target.value)}
//       />
//       <button onClick={() => setDark((prev) => !prev)}>change theme</button>
//       <div style={theme}>{doubleNumber}</div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import CookieBanner from "./CookieBanner";
import "./App.css";
const App = () => {
  const [show, setshow] = useState(true);
  return <>{show && <CookieBanner setshow={setshow} show={show} />}</>;
};

export default App;
