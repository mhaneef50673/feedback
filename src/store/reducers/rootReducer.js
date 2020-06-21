import { combineReducers } from 'redux';
import feedbackReducer from './feedbackReducer';

const appReducer = combineReducers({
  feedbackReducer,
});

/**
 * Root reducer to be added to global store
 */
const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;