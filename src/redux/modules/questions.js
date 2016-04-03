const GET_QUESTIONS = 'redux-example/GET_QUESTIONS';
const ADD_QUESTIONS = 'redux-example/ADD_QUESTIONS';

const initialState = [{
  id: 1,
  userId: 1,
  item1: 'lemon',
  item2: 'orange'
}];

export default function questions(state = initialState, action = {}) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state
      };
    case ADD_QUESTIONS:
    debugger;
      action.payload.id = Object.keys(state).length + 1;
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    default:
      return state;
  }
}

export function getQuestions() {
  return {
    type: GET_QUESTIONS
  };
}

export function addQuestions(response) {
  console.log(response);
  return {
    type: ADD_QUESTIONS,
    payload: response
  };
}
