import React from "react";
import ReactDOM from "react-dom/client";
import { setupAxiosInterceptors } from "./api/AxiosService";
import { main, viteEnv } from "./configure";
import App from "./App";
import inDev from "./utils/inDebug";
import { Global, css } from "@emotion/react";
import "/style.css";
import { BrowserRouter as Router } from "react-router-dom";

setupAxiosInterceptors();
inDev(() => console.log(viteEnv));

// Hook react to the HTML element with id="root"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Global
			styles={css`
				// You can add more global styles here
			`}
		/>
		<Router basename={main.basePath}>
			<App />
		</Router>
	</React.StrictMode>,
);
