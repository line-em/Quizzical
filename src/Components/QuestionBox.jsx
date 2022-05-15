import React from "react";

function QuestionBox() {
	// const choices = choices.map((choice) => {
	// 	return (
	// 		<div className="choice-container">
	// 			<button className="choice-button" role="button" onClick={props.startGame}>
	// 				{choice}
	// 			</button>
	// 		</div>
	// 	);
	// });
	return (
		<section className="question-container">
			<p className="question">{/* {props.question} */}</p>
			<article className="button-container">{/* {choices} */}</article>
		</section>
	);
}

export default QuestionBox;
