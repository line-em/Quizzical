import React from "react";
import { Momentum } from "@uiball/loaders";

function Loading() {
	return (
		<div className="flex-center y-separation">
			<p>Loading...</p>{" "}
			<Momentum
				size={32}
				color={localStorage.getItem("theme") === "dark" ? "white" : "black"}
			/>
		</div>
	);
}

export default Loading;
