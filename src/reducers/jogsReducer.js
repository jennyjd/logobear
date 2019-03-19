const initialState = {
  data: [],
  loading: false,
};

export default function jogsReducer(state = initialState, action) {
  switch(action.type) {
    case 'SUCCESS_GET_JOGS':
      return {...state, data: action.payload}
    default:
      return state;
  }
}
