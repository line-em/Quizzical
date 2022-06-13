import { React, useState } from "react";
import QuestionBox from "../Helpers/QuestionBox";
import Confetti from "react-dom-confetti";

function GameScreen(props) {
	const [quizError, setQuizError] = useState(false);
	const [score, setScore] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const quizQuestions = props.quizData.map((question) => {
		return (
			<QuestionBox
				disabled={disabled}
				chooseAnswer={chooseAnswer}
				key={question.id}
				{...question}
			/>
		);
	});

	function chooseAnswer(answer, targetId) {
		props.setQuizData(
			props.quizData.map((question) => {
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
		if (props.quizData.every((question) => question.is_correct !== null)) {
			setScore(props.quizData.filter((quiz) => quiz.is_correct).length);
			setDisabled(true);
			setQuizError(false);
		} else {
			setQuizError(true);
		}
	}

	function playAgain() {
		props.setQuizData([]);
		props.startGame();
		setScore(0);
		setDisabled(false);
	}

	const scoreStyles = {
		backgroundColor: score === props.quizData.length ? "var(--green)" : "var(--transparency)",
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

			<section className="game-screen">{props.quizData && quizQuestions}</section>
			<div className="flex-center">
				<Confetti
					active={props.score >= props.quizData.length / 2}
					config={confettiConfig}
				/>
			</div>
			{disabled && (
				<div className="check-answers-container" style={scoreStyles}>
					<h2>Correct Answers:</h2>
					<p>
						{score} / {props.quizData.length}
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
