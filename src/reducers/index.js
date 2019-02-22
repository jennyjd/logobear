const initialState = {
  user: {
    loading: true,
    isAuthentificated: false,
  }
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_LOG_IN':
      return {...state, user: { ...state.user, isAuthentificated: true}};
    case 'SUCCESS_GET_USER':
      return {...state, user: { ...state.user, isAuthentificated: true, loading: false}};
    case 'FAILED_GET_USER':
      return {...state, user: { ...state.user, isAuthentificated: false, loading: false}};
    default:
      return state;
  }
}
