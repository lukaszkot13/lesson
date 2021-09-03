import React, { useState } from "react";

const Timer = () => {
  const [date, setDate] = useState(new Date());
  // let date = new Date()
  setInterval(() => {
    console.log(date.toLocaleString());
    setDate(new Date());
  }, 1000);

  const header = <h1>Timer {date.toLocaleString()} </h1>;

  return header;
};
//dasd dasda dasdasdasdasdasd
// const Timer = () => {
// 	const name1 = "Mateusz";
// 	const header1 = React.createElement(
// 		"h1",
// 		{ className: "header1" },
// 		`Timer ${name1}`
// 	);
// 	console.log("header1", header1);

// 	return header1;
// };

export default Timer;
