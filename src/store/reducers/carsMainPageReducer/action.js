export const addCar = (car) => (dispatch) => {
    try {
      dispatch({ type: "ADD_CAR", payload: car });
    } catch (error) {
      console.error("Add car error: ", error);
    }
  };
  
  export const editCar = (id, updatedCar) => (dispatch) => {
    try {
      dispatch({ type: "EDIT_CAR", payload: { id, updatedCar } });
    } catch (error) {
      console.error("Edit car error: ", error);
    }
  };
  
  export const deleteUser = (id) => (dispatch) => {
    try {
      dispatch({ type: "DELETE_CAR", payload: id });
    } catch (error) {
      console.error("Delete car error: ", error);
    }
  };
  