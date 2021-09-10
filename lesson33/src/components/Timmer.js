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



useEffect(() => {
   
    if (counter % 5 === 0 && counter % 3 === 0) {
        alert('te liczby sa podzielne przez 3 i 5', counter)
    }else if (counter % 5 === 0){
        alert('Counter podzielny tylko przez 5', counter)
    }else if (counter % 3 === 0){
        alert('Counter podzielny tylko przez 3', counter)
    }
}, [counter])

useEffect(() => {
    console.log('Counter change:', counter)
},[counter])
	
	const header = <h1>Timer {date.toLocaleString()} </h1>

	return (
    <div>
        {header}
        Counter: {counter} 
        <button onClick={()=> setCounter(counter +1)}>Click</button>
        <button onClick={()=> setCounter(counter+3)}>Click +3</button>
    </div>
    )
}

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
