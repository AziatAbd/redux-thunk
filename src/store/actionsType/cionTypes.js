export const actionTypess = {
  ADD: "ADD",
};

export const postRquest = (data) => {
  return {
    type: actionTypess.ADD,
    payload:data
  };
};
