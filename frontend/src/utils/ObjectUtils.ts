export const rollThroughObj = (
	obj: Readonly<Partial<{ state: string; id: string }>>,
) => {
	let result = "";
	for (const [key, value] of Object.entries(obj)) {
		result += ` -${key}: ${value}`;
	}
	return result.trim();
};
