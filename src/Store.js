import numReducer from './reducers/numReducer';
import editStatusReducers from './reducers/changStatusReducer';
var oldState = {
    num : ["man hinh", "chuot", "ban phim"],
    editStaus: true
}
var redux = require('redux');//Khai báo redux
// Khai báo reducer
var reducer1 = (state = oldState, action) => {
    switch (action.type) {
      case "CHANGE_EDIT_STATUS":
        return {...state,editStaus : !state.editStaus};
      case "ADD_NEW":
        return {...state,num:[...state.num,action.newItem]};
      case "DELETE":
        return {...state,num:[state.num.filter((value,i)=> i !== action.index)]};
      default:
        break;
    }
    return state;
}


const allReducer = redux.combineReducers({
  num: numReducer,
  editStaus : editStatusReducers
})
// Khai báo store quản lý reducer 1
var store1 = redux.createStore(allReducer);
store1.subscribe(() => {
    console.log('đã thay đổi state');
    console.log(store1.getState());
}
    );
store1.dispatch({type : "CHANGE_EDIT_STATUS"});
store1.dispatch({
  type : "ADD_NEW",
  newItem : "Tai nghe"
});
store1.dispatch({
  type : "DELETE",
  index : 0
});
export default store1;