import { atom, useAtom } from "jotai";
const counterAtom = atom(0);

const HomePage = () => {
	const [counter, setCounter] = useAtom(counterAtom);

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
