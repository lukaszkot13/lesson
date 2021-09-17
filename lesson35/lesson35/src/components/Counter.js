import React, { useEffect, useState } from "react";

function Counter({ defultValue = 0, step = 1 }) {
	const [value, setValue] = useState(defultValue);

	useEffect(() => {
		console.log("useEffect");
	});
	console.log("render");
	const onMinus = () => {
		setValue(value - step);
	};

	const onAdd = () => {
		setValue(value + step);
	};
	return (
		<div>
			<h1>Counter</h1>
			<button onClick={onMinus}>-</button>
			{value}
			<button onClick={onAdd}> +</button>
		</div>
	);
}

export default Counter;
