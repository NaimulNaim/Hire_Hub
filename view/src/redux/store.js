import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { jobsReducer } from "./reducers/jobsReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { userReducer } from "./reducers/userReducer";

const rootReducer = combineReducers({
    jobsReducer: jobsReducer,
    loaderReducer : loaderReducer,
    userReducer : userReducer,
  })

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
