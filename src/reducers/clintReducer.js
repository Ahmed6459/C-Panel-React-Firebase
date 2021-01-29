const clientReducer = (state = [], action) => {
    switch (action.type) {
      case "REMOVE_client": {
        console.log("Added a client");
        return state;
      }
      case "REMOVE_CLIENT_ERR": {
        console.log("An error occurred");
        return state;
      }
      default:
          return state
    }
  
  }

export default clientReducer