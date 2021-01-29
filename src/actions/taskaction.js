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
  