const POST_RESPONSE = 'redux-example/POST_RESPONSE';

const initialState = {
  question_id: 1,
  userId: 1,
  response: 0
};

export default function responses(state = initialState, action = {}) {
  switch (action.type) {
    case POST_RESPONSE:
      //action.payload.id = state.questions.length() + 1;
      console.log(action);
      return {
        ...state,
        responses: [...state.responses, action.payload]
      };
    default:
      return state;
  }
}

export function getQuestions() {
  return {
    type: POST_RESPONSE
  };
}
