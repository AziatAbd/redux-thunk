import { BASE_URL } from "../../utils/constants";
import { postRquest } from "../actionsType/cionTypes";

export const requestGetTodos = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/todo.json`);

      const data = await response.json();
      const conwerToResponsToErray = [];
      for (const key in data) {
        conwerToResponsToErray.push({
          id: key,
          title: data[key].title,
          isCompleted: data[key].isCompleted,
        });
      }
      dispatch({ type: "Gethaldle", payload: conwerToResponsToErray });
      console.log(conwerToResponsToErray);
    } catch (error) {
      console.error(error);
    }
  };
};

export const requestPostData = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/todo.json`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      dispatch(requestGetTodos());
    } catch (error) {
      console.log(error);
    }
  };
};

export const requestEditTodos = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/todo/${data.id}.json`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ ...data, isCompleted: !data.isCompleted }),
      });

      dispatch(requestGetTodos());
    } catch (error) {
      console.log(error);
    }
  };
};

export const requestDeleteTodos = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/todo/${id}.json`, {
        method: "DELETE",
      });

      dispatch(requestGetTodos());
    } catch (error) {
      console.log(error);
    }
  };
};
