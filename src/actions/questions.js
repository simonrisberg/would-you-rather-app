import { saveQuestion, saveQuestionAnswer } from "../utils/api"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'


function addQuestionAnswer({qid, authedUser, answer}) {
  return {
    type: ADD_QUESTION_ANSWER,
    qid,
    authedUser,
    answer
  }
}

export function handleAddQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(addQuestionAnswer(info))

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAddQuestionAnswer: ', e)
        dispatch(addQuestionAnswer(info))
        alert('There was an error posting the answer. Try again!')
      })

  }
}
function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser

    })
      .then((question) => dispatch(addQuestion(question)))
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
} 