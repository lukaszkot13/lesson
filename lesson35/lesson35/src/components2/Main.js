import React, { useEffect, useState } from "react";

function _useState(defaultValue) {
	let value = defaultValue;

	function setValue(val) {
		value = val;
	}

	return [value, setValue];
}
const Main = () => {
	const [show, setShow] = useState(false);
	const [nambers, setNambers] = useState([]);
	const [counter, setCounter] = useState(1);

	const handelClick = () => {
		setShow(!show);
	};

	useEffect(() => {
		console.log("mount");
	}, []);

	useEffect(() => {
		console.log("counter changed");
	}, [counter]);

	const handelCounter = () => {
		setCounter(counter + 1);

		if (counter > 5 && counter % 2 === 0) {
			const newNambers = [...nambers, counter];
			setNambers(newNambers);
		}
	};

	const shouldShowCounter = () => {
		if (counter === 10) {
			return true;
		}
		return show;
	};

	console.log("render <Main />", nambers);

	return (
		<div>
			<h1>Hey jestem Main </h1>
			{shouldShowCounter() && <h3>{counter}</h3>}
			{show && <h3>{counter}</h3>}
			<button onClick={handelCounter}>counter</button>
			<button onClick={handelClick}>Show</button>
		</div>
	);
};

export default Main;
