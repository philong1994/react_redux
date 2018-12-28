const editStatusInitialState = {}
const editStatusReducers = (state = editStatusInitialState, action) => {
  switch (action.type) {
    case "CHANGE_EDIT_STATUS":
        return !state;
    default:
      return state
  }
}
export default editStatusReducers;