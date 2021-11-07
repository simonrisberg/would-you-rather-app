export const TOGGLE_UNANSWERED_QUESTIONS = 'TOGGLE_UNANSWERED_QUESTIONS'

export function toggleUnAnsweredQuestions(unAnsweredQuestionsIsActive) {
  return {
    type: TOGGLE_UNANSWERED_QUESTIONS,
    unAnsweredQuestionsIsActive
  }
}