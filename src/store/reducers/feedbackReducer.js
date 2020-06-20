import get from 'lodash/get';
import findIndex from 'lodash/findIndex';
import {
  FEEDBACK_LIST,
  IS_FEEDBACKS_FETCHING,
  FEEDBACK_LIST_ERROR,
  FEEDBACK_TREND,
  FEEDBACK_TREND_ERROR,
  IS_FEEDBACK_TREND_FETCHING,
  FEEDBACK_LIST_STORE_KEY,
  FEEDBACK_TREND_STORE_KEY,
  UPDATE_FEEDBACK,
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
      return {
        ...state,
        ...{
          [FEEDBACK_LIST_STORE_KEY]: {
            isError: false,
            isFetching: true,
            feedbacks: [],
          }
        }
      }
    case FEEDBACK_LIST:
      return {
        ...state,
        ...{
          [FEEDBACK_LIST_STORE_KEY]: {
            isError: false,
            isFetching: false,
            feedbacks: action.payload.data,
          }
        }
      }
    case FEEDBACK_LIST_ERROR:
      return {
        ...state,
        ...{
          [FEEDBACK_LIST_STORE_KEY]: {
            isError: true,
            isFetching: false,
            feedbacks: [],
          }
        }
      }
    case IS_FEEDBACK_TREND_FETCHING:
      return {
        ...state,
        ...{
          [FEEDBACK_TREND_STORE_KEY]: {
            isError: false,
            isFetching: true,
            feedbackTrendData: [],
          }
        }
      }
    case FEEDBACK_TREND:
      return {
        ...state,
        ...{
          [FEEDBACK_TREND_STORE_KEY]: {
            isError: false,
            isFetching: false,
            feedbackTrendData: action.payload.data,
          }
        }
      }
    case FEEDBACK_TREND_ERROR:
      return {
        ...state,
        ...{
          [FEEDBACK_TREND_STORE_KEY]: {
            isError: true,
            isFetching: false,
            feedbackTrendData: [],
          }
        }
      }
    case UPDATE_FEEDBACK:
      debugger;
      const feedbackListState = get(state, FEEDBACK_LIST_STORE_KEY);
      const { feedbacks } = feedbackListState;
      feedbacks.push(action.payload.data.feedback)
      const feedbackTrendState = get(state, FEEDBACK_TREND_STORE_KEY);
      const { feedbackTrendData } = feedbackTrendState;
      const createdDate = action.payload.data.createdDate;
      const index = findIndex(feedbackTrendData, item => item.date === createdDate);
      if(index > -1) {
        feedbackTrendData[index].count = feedbackTrendData[index].count+1;
      } else {
        feedbackTrendData.push({
          date: createdDate,
          count: 1
        })
      }
      return {
        ...state,
        ...{
          [FEEDBACK_TREND_STORE_KEY]: {
            isError: false,
            isFetching: false,
            feedbackTrendData: [...feedbackTrendData],
          },
          [FEEDBACK_LIST_STORE_KEY]: {
            isError: false,
            isFetching: false,
            feedbacks: [...feedbacks]
          }
        }
      }
    default:
      return initialState;
  };
};

export default feedbackReducer;