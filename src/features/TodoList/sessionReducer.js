const initialState = {};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RESTORE_SESSION':
      return { ...state, session: action.payload };
    default:
      return state;
  }
};

export default sessionReducer;