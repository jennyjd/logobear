const initialState = {
  loading: true,
  isAuthentificated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_LOG_IN':
      return {...state, isAuthentificated: true};
    case 'SUCCESS_GET_USER':
      return {...state, isAuthentificated: true, loading: false};
    case 'FAILED_GET_USER':
      return {...state, isAuthentificated: false, loading: false};
    default:
      return state;
  }
}
