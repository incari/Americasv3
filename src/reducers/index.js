const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SERVICES':
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
