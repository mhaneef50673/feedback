import {
  FEEDBACK_LIST,
  IS_FEEDBACKS_FETCHING,
  FEEDBACK_LIST_STORE_KEY,
  FEEDBACK_TREND_STORE_KEY,
  FEEDBACK_LIST_ERROR,
} from '../../constants';

const initialState = {
  [FEEDBACK_LIST_STORE_KEY]: {
    isError: false,
    isFetching: false,
    feedbacks: [],
  },
  [FEEDBACK_TREND_STORE_KEY]: {
    isError: false,
    isFetching: false,
    feedbackTrendData: [],
  }
};

const feedbackReducer = (state, action) => {
  switch (action.type) {
    case IS_FEEDBACKS_FETCHING:
      return Object.assign({}, state, {
        [FEEDBACK_LIST_STORE_KEY]: {
          isError: false,
          isFetching: true,
          feedbacks: [],
        }
      });
    case FEEDBACK_LIST:
      return Object.assign({}, state, {
        [FEEDBACK_LIST_STORE_KEY]: {
          isError: false,
          isFetching: false,
          feedbacks: action.payload.data,
        }
      });
    case FEEDBACK_LIST_ERROR:
      return Object.assign({}, state, {
        [FEEDBACK_LIST_STORE_KEY]: {
          isError: true,
          isFetching: false,
          feedbacks: [],
        }
      });
    default:
      return initialState;
  };
};

export default feedbackReducer;