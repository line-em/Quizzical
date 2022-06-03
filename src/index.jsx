import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import IconBackground from "./Helpers/IconBackground";
import "modern-css-reset";
import "./index.css";
import "./Helpers/IconBackgroundStyles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<>
			<IconBackground />
			<App />
		</>
	</React.StrictMode>
);
