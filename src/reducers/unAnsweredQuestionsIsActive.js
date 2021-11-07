import { TOGGLE_UNANSWERED_QUESTIONS } from "../actions/unAnsweredQuestionsIsActive";

export default function unAnsweredQuestionsIsActive(state = {}, action) {

  switch (action.type) {
    case TOGGLE_UNANSWERED_QUESTIONS:
      return action.unAnsweredQuestionsIsActive
    default:
      return state
  }
}