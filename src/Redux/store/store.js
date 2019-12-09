import counterReducer from "./reducer";
import { todosReducer } from "./todosReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import thunkMiddleware from "redux-thunk";

const reducer = combineReducers({
  counterReducer: counterReducer,
  todosReducer: todosReducer,
  form: reduxFormReducer // mounted under "form"
});

const store = createStore(
  reducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunkMiddleware)
);

export default store;
