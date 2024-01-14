/**
 * Execute whatever you pass only in development (not production)
 */
const inDev = <T>(callback: () => T): T | null => {
	if (process.env.NODE_ENV === "development") {
		return callback();
	}
	return null;
};

export default inDev;
