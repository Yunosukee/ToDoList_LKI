export function capitalizeFirstLetter(string: string): string {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
/**
 * @description Function to clear multiple path slashes
 * @example clearMultiplePathSlashes("/admin//MAINTENANCE") => "/admin/MAINTENANCE"
 */
export const clearMultiplePathSlashes = (path: string): string => {
	return path.replace(/\/{2,}/g, "/");
};
/**
 * Trims parameters and queries from a URL path that start with ':' or '?'.
 *
 * @param {string} path - The URL path to trim.
 * @returns {string} The URL path without parameters and queries.
 * @example
 * // returns "/path"
 * trimPathOfParameters("/path/:param1/:param2:param3/?param4")
 */
export const trimPathOfParameters = (path: string) => {
	return path.replace(/\/:[^/]*|\?[^/]*/g, "");
};
