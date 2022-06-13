import { React, useState, useEffect, createElement } from "react";
import { nanoid } from "nanoid";
import StartScreen from "./Components/StartScreen";
import Loading from "./Helpers/Loading";
import GameScreen from "./Components/GameScreen";
import NavButtons from "./Components/NavButtons";
import Footer from "./Components/Footer";
import { ThumbsDown } from "phosphor-react";

function App() {
	const [gameStarted, setGameStarted] = useState(false);
	const [customization, setCustomization] = useState([]);
	const [quizData, setQuizData] = useState([]);
	const [score, setScore] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	if (quizData.length < 0) {
		setGameStarted(false);
	}

	const updateCustomization = (numQuestions, category, difficulty) => {
		setCustomization([numQuestions, category, difficulty]);
		startGame();
	};

	const startGame = () => {
		setGameStarted(!gameStarted);
		setDisabled(false);
	};

	useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://opentdb.com/api.php?amount=${customization[0]}&category=${customization[1]}&type=multiple&difficulty=${customization[2]}&encode=base64`
		)
			.then((response) => response.json())
			.then((data) => {
				setQuizData(
					data.results.map((quiz) => {
						return {
							question: atob(quiz.question),
							all_answers: [
								atob(quiz.correct_answer),
								...quiz.incorrect_answers.map((ans) => atob(ans))
							].sort(() => Math.random() - 0.5),
							correct_answer: atob(quiz.correct_answer),
							current_answer: "",
							is_correct: null,
							id: nanoid()
						};
					})
				);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				alert("Something went wrong. Please try again.");
				console.error(err);
			});
	}, [gameStarted]);

	function playAgain() {
		setQuizData([]);
		setGameStarted(false);
		setScore(0);
		setDisabled(false);
	}

	return (
		<main>
			<div className={gameStarted ? "whole-grid" : "center"} id="app">
				<NavButtons />
				{isLoading && <Loading />}

				{/* Initial Screen & Customization */}
				{!gameStarted && <StartScreen updateCustomization={updateCustomization} />}

				{/* Game Screen */}
				{gameStarted && (
					<GameScreen
						startGame={startGame}
						quizData={quizData}
						setQuizData={setQuizData}
						playAgain={playAgain}
						setScore={setScore}
						score={score}
						disabled={disabled}
						setDisabled={setDisabled}
					/>
				)}
				<Footer />
			</div>
		</main>
	);
}

export default App;
