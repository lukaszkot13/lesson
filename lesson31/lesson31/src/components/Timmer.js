<<<<<<< HEAD
import React, { useEffect, useState } from "react"

const Timer = () => {
    const [date, setDate] = useState(new Date())
    const [counter, setCounter] = useState(0)


useEffect(() =>{
    const intervalId = setInterval(() => {
        console.log(date.toLocaleString())
        setDate(new Date())
    }, 1000)
    return () => {
        clearInterval(intervalId)
    }
},[] )



	
	const header = <h1>Timer {date.toLocaleString()} </h1>

	return (
    <div>
        {header}
        Counter: {counter} 
        <button onClick={()=> setCounter(counter +1)}>Click</button>
    </div>
    )
}
=======
import React, { useState } from "react";

const Timer = () => {
  const [date, setDate] = useState(new Date());
  // let date = new Date()
  setInterval(() => {
    console.log(date.toLocaleString());
    setDate(new Date());
  }, 1000);

  const header = <h1>Timer {date.toLocaleString()} </h1>;
>>>>>>> 80dec183734740c8ad0af0c6445e378b645a37ae

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
