import { combineReducers } from "redux";
import authedUser from "./authedUser";
import users from "./users";
import questions from "./questions";
import unAnsweredQuestionsIsActive from "./unAnsweredQuestionsIsActive";

export default combineReducers({
  authedUser,
  users,
  questions,
  unAnsweredQuestionsIsActive,
})