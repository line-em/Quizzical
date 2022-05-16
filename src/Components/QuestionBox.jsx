import { React, useState } from "react";

function QuestionBox(props) {
	const selected = {
		backgroundColor: "var(--teal)"
	};

	const choices = props.all_answers.map((choice) => {
		return (
			<button
				className={`choice-button`}
				style={props.current_answer ? selected : null}
				role="button"
				key={choice}
				id={props.id}
				onClick={props.chooseAnswer(choice)}
			>
				{props.correct_answer === choice ? "✔" : ""}
				{choice}
			</button>
		);
	});
	return (
		<section className="question-container">
			<p className="question">{props.question}</p>
			<article className="button-container">{choices}</article>
		</section>
	);
}

export default QuestionBox;
