export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function addUserAnswer({qid, authedUser, answer}) {
  return {
    type: ADD_USER_ANSWER,
    qid, 
    authedUser,
    answer

  }
}

export function addQuestionToUser(question) {
  return {
    type: ADD_USER_QUESTION,
    question,
  }
}

