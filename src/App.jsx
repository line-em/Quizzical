import { React, useState } from "react";
import StartScreen from "./Components/StartScreen";
import Loading from "./Helpers/Loading";
import GameScreen from "./Components/GameScreen";
import NavButtons from "./Components/NavButtons";
import Footer from "./Components/Footer";

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [customization, setCustomization] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const updateCustomization = (numQuestions, category, difficulty) => {
		setCustomization([numQuestions, category, difficulty]);
		setGameStarted(!gameStarted);
	};

	return (
		<main>
			<div className={gameStarted ? "whole-grid" : "center"} id="app">
				<NavButtons />
				{isLoading && <Loading />}

				{/* Home Screen & Customization */}
				{!gameStarted && <StartScreen updateCustomization={updateCustomization} />}

				{gameStarted && (
					<GameScreen
						setGameStarted={setGameStarted}
						setIsLoading={setIsLoading}
						customization={customization}
					/>
				)}
				<Footer />
			</div>
		</main>
	);
}

export default App;
