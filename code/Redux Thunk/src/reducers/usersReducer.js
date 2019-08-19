
function usersReducer(state = {}, action) {
  switch (action.type) {
    default:
      return { ...state, users: action.payload };
  }
}

export default usersReducer;
