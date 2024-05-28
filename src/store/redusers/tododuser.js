const initialState = {
  todos: [],
};
export const todoReduser = (state = initialState, action) => {
  switch (action.type) {
    case 'Gethaldle': 
    return { ...state, todos: action.payload };

    default:
      return state;
  }
};
