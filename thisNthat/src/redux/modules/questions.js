const GETQUESTIONS = 'redux-example/counter/GETQUESTIONS';

const initialState = {
[
  {
    id: 0,
    userId:"",
    itemA:"",
    itemB:""
  },
  {
    id: 1,
    userId:"",
    itemA:"",
    itemB:""
  }
]
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GETQUESTIONS:
      const {quesArray} = state;
      return {
        quesArray
      };
    default:
      return state;
  }
}

export function increment() {
  return {
    type: GETQUESTIONS
  };
}
