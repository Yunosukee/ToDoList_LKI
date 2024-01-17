import { useState } from "react";
/**
 * Works like useState but stores the value in session storage
 * @param key Create a key to store the value in session storage
 * @param initialValue Assign an initial value to the key
 * @returns [storedValue, setValue] Returns the stored value and a function to set the value
 */
const useSessionStorage = <T>(
	key: string,
	initialValue: T,
): [T, (value: T) => void] => {
	const [storedValue, setStoredValue] = useState<T>(() => {
		try {
			const item = sessionStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	const setValue = (value: T) => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
			sessionStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.log(error);
		}
	};

	return [storedValue, setValue];
};

export default useSessionStorage;
