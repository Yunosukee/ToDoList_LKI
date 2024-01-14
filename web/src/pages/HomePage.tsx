import { useState } from "react";

const HomePage = () => {
	const [counter, setCounter] = useState(0);

	return (
		<div>
			<p>HomePage</p>
			<button className="btn btn-sm" onClick={() => setCounter(counter + 1)}>
				Click me
			</button>
			<div>Counter: {counter}</div>
		</div>
	);
};

export default HomePage;
