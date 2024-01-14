// -------- ENVIRONMENT VARIABLES --------
export const viteEnv = import.meta.env;
//Main configuration, static data, mostly used here
export const main = {
	program_name: `${viteEnv.VITE_APP_NAME}${
		viteEnv.MODE ? " [development]" : ""
	}`,
	program_version: "1.0.0",
	basePath: viteEnv.VITE_BASE_PATH,
};
//About page configuration
export const about = {
	program_description: `This is a ${main.program_name} for <purpose>.`,
	program_authors: [{ name: "Author Name", email: "email@example.com" }],
};
// -------- FRONTEND CONFIGURATION --------
// sizes in pixels
export const topbarSize = 64;
export const sidebarSize = 256;
