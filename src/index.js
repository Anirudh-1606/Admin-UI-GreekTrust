import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { SnackbarProvider } from "notistack";
=======
>>>>>>> 37a853cd0bf4d671ea79f19b1dd94cf3ea788a3d

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
<<<<<<< HEAD
		<SnackbarProvider
			maxSnack={1}
			anchorOrigin={{
				vertical: "bottom",
				horizontal: "center",
			}}
			preventDuplicate
		>
			<App />
		</SnackbarProvider>
=======
		<App />
>>>>>>> 37a853cd0bf4d671ea79f19b1dd94cf3ea788a3d
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
