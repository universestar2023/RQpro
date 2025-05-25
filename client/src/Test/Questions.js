import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/question.css";
/** Custom Hook */
import { useFetchQestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked, questionNumber }) {
  // A local state variable that stores the index of the user's selected answer for the current question.
  const [checked, setChecked] = useState(undefined);
  // Tracks the current question index in the quiz.
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  // eslint-disable-next-line no-unused-vars
  const [{ isLoading, apiData, serverError }] = useFetchQestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  //Whenever answer is changed by user
  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  //on selecting option 
  function onSelect(i) {
    //marks parent check 
    onChecked(i);
    //marks local ckeck
    setChecked(i);
  }

  if (isLoading)
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <circle
          fill="#93daf6"
          stroke="#93daf6"
          stroke-width="10"
          r="10"
          cx="40"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.4"
          ></animate>
        </circle>
        <circle
          fill="#93daf6"
          stroke="#93daf6"
          stroke-width="10"
          r="10"
          cx="100"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="-.2"
          ></animate>
        </circle>
        <circle
          fill="#93daf6"
          stroke="#93daf6"
          stroke-width="10"
          r="10"
          cx="160"
          cy="65"
        >
          <animate
            attributeName="cy"
            calcMode="spline"
            dur="2"
            values="65;135;65;"
            keySplines=".5 0 .5 1;.5 0 .5 1"
            repeatCount="indefinite"
            begin="0"
          ></animate>
        </circle>
      </svg>
    );
  if (serverError) {
    // If serverError is an object, extract the message property
    const errorMessage =
      typeof serverError === "object" ? serverError.message : serverError;
    return <h3 className="text-light">{errorMessage || "Unknown Error"}</h3>;
  }

  return (
    <div className="questions">
      <div className="que">
        <span>Question {questionNumber}</span>
        <span>&nbsp;</span> {/* Non-breaking space */}
        <span>{questions?.question}</span>
      </div>
      <ul key={questions?.id} className="options-que">
        {questions?.options.map((q, i) => (
          <li key={i}>
            <input
              type="radio"
              value={false}
              // Groups all the radio buttons under the same name
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />

            <label className="options" htmlFor={`q${i}-option`}>
              {q}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
