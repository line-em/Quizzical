import { React, useState, useEffect } from "react";
import StartScreen from "./Components/StartGame";
import GameScreen from "./Components/GameScreen";
import NavButtons from "./Components/NavButtons";
import Footer from "./Components/Footer";
import { nanoid } from "nanoid";
import {} from `@uiball/loaders`  

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(null)
	const [customization, setCustomization] = useState([]);
	let quizData = [];

	const startGame = () => {
		setGameStarted(!gameStarted);
	};

	const updateCustomization = (num, dif) => {
		setCustomization([num, dif]);
		startGame();
	};

	const resetGame = () => {
		setGameStarted(!gameStarted);
		setCustomization([]);
	};

	function getQuizData() {
		fetch(
			`https://opentdb.com/api.php?amount=${customization[0]}&category=9&type=multiple&difficulty=${customization[1]}`,
			{
				method: "GET",
				headers: {
					cookie: "PHPSESSID=79dde1a3e84756e02bda118c04b3951d"
				}
			}
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				quizData = [
					data.results.map((quiz) => {
						return {
							question: quiz.question,
							all_answers: [quiz.correct_answer, ...quiz.incorrect_answers],
							correct_answer: quiz.correct_answer,
							current_answer: "",
							is_correct: false,
							id: nanoid()
						};
					})
				];
				console.log(quizData);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	useEffect(() => {
		getQuizData();
	}, [() => startGame()]);

	return (
		<main>
			<div className={gameStarted ? "whole-grid" : "center"} id="app">
				<NavButtons />
				{gameStarted ? (
					<GameScreen resetGame={resetGame} quizData={quizData} />
				) : (
					<>
						<StartScreen updateCustomization={updateCustomization} />
						<Footer />
					</>
				)}
			</div>
		</main>
	);
}

export default App;

// {/* {FIXME: Add Link to Github Repository on NavButtons} */}
