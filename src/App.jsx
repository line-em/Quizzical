import { React, useState } from "react";
import StartScreen from "./Components/StartGame";
import GameScreen from "./Components/GameScreen";
import NavButtons from "./Components/NavButtons";

function App() {
	const [gameStarted, setGameStarted] = useState(false);

	const startGame = () => {
		setGameStarted(!gameStarted);
		document.getElementById("app").classList.toggle("center");
		document.getElementById("app").classList.toggle("whole-grid");
	};
	// {/* {FIXME: Add Link to Github Repository on NavButtons} */}

	return (
		<main>
			<div className="center" id="app">
				<NavButtons />
				{gameStarted ? (
					<GameScreen startGame={startGame} />
				) : (
					<StartScreen startGame={startGame} />
				)}
			</div>
		</main>
	);
}

export default App;
