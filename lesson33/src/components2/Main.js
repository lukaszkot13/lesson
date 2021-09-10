import React, { useState } from "react";

const Main = () => {
	const [show, setShow] = useState(false);
	const [nambers, setNambers] = useState([]);
	const [counter, setCounter] = useState(1);

	const handelClick = () => {
		setShow(!show);
	};

	const handelCounter = () => {
		setCounter(counter + 1);

		if (counter > 5 && counter % 2 === 0) {
			const newNambers = [...nambers, counter];
			setNambers(newNambers);
		}
	};

	console.log("render <Main />", nambers);

	return (
		<div>
			<h1>Hej jestem Main</h1>
			{show && <h3>{counter}</h3>}
			<button onClick={handelCounter}>counter</button>
			<button onClick={handelClick}>Show</button>
		</div>
	);
};

export default Main;
