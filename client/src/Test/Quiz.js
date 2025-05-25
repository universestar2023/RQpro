import React, { useState } from "react";
import Questions from "./Questions";
import '../styles/Main.css';

import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

/** redux store import */
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Quiz() {
  // A local state variable that stores the user's selected answer for the current question.
  const [check, setChecked] = useState(undefined);

  // An array from the Redux store that holds the user's answers.
  const result = useSelector((state) => state.result.result);
  // An array from the Redux store that contains the list of quiz questions.
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  /** next button event handler */
  function onNext() {
    if (trace < queue.length) {
      /** increase the trace value by one using MoveNextAction */
      dispatch(MoveNextQuestion());

      /** insert a new result as option selected for current trace or index os question 
       in the array.  */
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }

    /** reset the value of the checked variable */
    setChecked(undefined);
  }

  /** Prev button event handler */
  function onPrev() {
    if (trace > 0) {
      /** decrease the trace value by one using MovePrevQuestion */
      dispatch(MovePrevQuestion());
    }
  }

  //This is setted when user moves to next question
  function onChecked(check) {
    setChecked(check);
  }

  /** finished exam after the last question */
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/test/result"} replace={true}></Navigate>;
  }

  return (
    <div className="container-que">
      

      {/* Display questions with question number */}
      <Questions onChecked={onChecked} questionNumber={trace + 1} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn-prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn-next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}
