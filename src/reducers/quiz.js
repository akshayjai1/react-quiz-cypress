import { ActionTypes, STOCK_URL } from "../constants/actionTypes";
import Axios from "axios";
// import { combineReducers } from "redux";

let initialQuiz = {
  quiz: {
    config: {
      allowBack: true,
      allowReview: true,
      autoMove: false, // if true, it will move to next question automatically when answered.
      duration: 0, // indicates the time in which quiz needs to be completed. 0 means unlimited.
      pageSize: 1,
      requiredAll: false, // indicates if you must answer all the questions before submitting.
      richText: false,
      shuffleQuestions: false,
      shuffleOptions: false,
      showPager: true,
      theme: "none",
    },
    questions: [],
  },
  mode: "quiz",
  pager: {
    index: 0,
    size: 1,
    count: 1,
  },
};

export default (state = { ...initialQuiz }, action) => {
  // debugger;
  switch (action.type) {
    case "INCREMENT_ASYNC":
      return {
        ...state,
        pager: {
          ...state.pager,
          count: state.pager.count + 1,
        },
      };
    case "INCREMENT_ASYNC_ERROR":
      return {
        ...state,
        error: true,
      };
    case ActionTypes.PagerUpdate:
      return {
        ...state,
        pager: action.payload,
        mode: "quiz",
      };
    case ActionTypes.QuizLoad:
      return {
        ...state,
        quiz: action.payload,
      };
    case ActionTypes.QuizSubmit:
      console.log("quiz.js Submitted.");
      return {
        ...state,
        mode: action.payload,
      };
    case ActionTypes.QuizAnswer:
      console.log("quiz.js reducer Quiz Answer called.");
      return {
        ...state,
        quiz: action.payload,
      };
    default:
      return state;
  }
};

export const getStocksAndInc = () => {
  return async (dispatch) => {
    try {
      await Axios.get(STOCK_URL);
      dispatch({
        type: "INCREMENT_ASYNC",
      });
    } catch (error) {
      dispatch({
        type: "INCREMENT_ASYNC_ERROR",
      });
    }
  };
};
