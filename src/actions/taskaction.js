export const removeTask = (client) => {
  return async(dispatch, getState, { getFirebase }) => {
  const firestore = await getFirebase().firestore();
    firestore
      .collection("client")
      .doc(client)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_TASK",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_TASK_ERR",
          err,
        });
      });
  };
};

export const editTask = (data,clientId) => {
  return async(dispatch, getState, { getFirebase }) => {
  const firestore = await getFirebase().firestore();
    firestore
      .collection("client")
      .doc(clientId)
      .update()
      .then(() => {
        dispatch({
          type: "Edit_TASK",
        });
      })
      .catch((err) => {
        dispatch({
          type: "Edit_TASK_ERR",
          err,
        });
      });
  };
};