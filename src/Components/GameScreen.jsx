import { React, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import QuestionBox from "../Helpers/QuestionBox";
import Confetti from "react-dom-confetti";

function GameScreen({ setGameStarted, setIsLoading, customization }) {
	const [quizError, setQuizError] = useState(false);
	const [score, setScore] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const [quizData, setQuizData] = useState([]);

	if (quizData.length < 0) {
		setGameStarted(false);
	}

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
	}, [customization]);

	function chooseAnswer(answer, targetId) {
		setQuizData(
			quizData.map((question) => {
				if (question.id === targetId) {
					return {
						...question,
						current_answer: answer,
						is_correct: answer === question.correct_answer
					};
				} else {
					return question;
				}
			})
		);
	}

	function checkAnswers() {
		if (quizData.every((question) => question.is_correct !== null)) {
			setScore(quizData.filter((quiz) => quiz.is_correct).length);
			setDisabled(true);
			setQuizError(false);
		} else {
			setQuizError(true);
		}
	}

	function playAgain() {
		setQuizData([]);
		setGameStarted(false);
		setScore(0);
		setDisabled(false);
		setQuizError(false);
	}

	const quizQuestions = quizData.map((question) => {
		return (
			<QuestionBox
				disabled={disabled}
				chooseAnswer={chooseAnswer}
				key={question.id}
				{...question}
			/>
		);
	});

	const scoreStyles = {
		backgroundColor: score === quizData.length ? "var(--green)" : "var(--transparency)",
		color: "var(--white)"
	};

	const confettiConfig = {
		angle: 90,
		spread: 360,
		startVelocity: 40,
		elementCount: 70,
		dragFriction: 0.12,
		duration: 3000,
		stagger: 3,
		width: "10px",
		height: "10px",
		perspective: "500px",
		colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
	};

	return (
		<>
			<div className="center">
				<h1>Quizz Time!</h1>
			</div>

			<section className="game-screen">{quizData && quizQuestions}</section>
			<div className="flex-center">
				<Confetti active={score >= quizData.length / 2} config={confettiConfig} />
			</div>
			{disabled && (
				<div className="check-answers-container" style={scoreStyles}>
					<h2>Correct Answers:</h2>
					<p>
						{score} / {quizData.length}
					</p>
				</div>
			)}
			{quizError && (
				<div className="check-answers-container">
					<h2>Please answer all questions!</h2>
				</div>
			)}
			{disabled ? (
				<button className="accent-button" role="button" onClick={playAgain}>
					Play Again!
				</button>
			) : (
				<button className="accent-button" role="button" onClick={checkAnswers}>
					Check Answers
				</button>
			)}
		</>
	);
}

export default GameScreen;
