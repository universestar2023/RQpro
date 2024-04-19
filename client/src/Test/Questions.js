import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../styles/question.css';
/** Custom Hook */
import { useFetchQestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

export default function Questions({ onChecked, questionNumber }) {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  // eslint-disable-next-line no-unused-vars
  const [{ isLoading, apiData, serverError }] = useFetchQestion();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
    dispatch(updateResult({ trace, checked }));
  }

  if (isLoading) return <h3>Loading...</h3>;
  if (serverError) {
    // If serverError is an object, extract the message property
    const errorMessage = typeof serverError === 'object' ? serverError.message : serverError;
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
              name="options"
              id={`q${i}-option`}
              onChange={() => onSelect(i)}
            />

            <label className="options" htmlFor={`q${i}-option`}>
              {q}
            </label>
            <div
              className={`check ${result[trace] === i ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
