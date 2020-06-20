import { combineReducers } from 'redux';
import feedbackReducer from './feedbackReducer';

const appReducer = combineReducers({
  feedbackReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;