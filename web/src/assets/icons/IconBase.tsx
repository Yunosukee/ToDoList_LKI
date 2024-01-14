import React from "react";
interface IconBaseProps {
	children:
		| string
		| number
		| boolean
		| React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
		| Iterable<React.ReactNode>
		| React.ReactPortal
		| null
		| undefined;
}
const IconBase = (props: IconBaseProps) => {
	return (
		<svg
			className="swap-on fill-current w-6 h-6"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
		>
			{props.children}
		</svg>
	);
};

export default IconBase;
