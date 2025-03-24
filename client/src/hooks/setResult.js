import { postServerData } from "../helper/helper";
import * as Action from "../redux/result_reducer";

//Whenever next is cliked
export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};
//whenever checked is changed or user changes any answer
export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

/** insert user data */
export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      if (result.length === 0 && !username)
        throw new Error("Couldn't get Result");
      await postServerData(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/api/route/result`,
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};
