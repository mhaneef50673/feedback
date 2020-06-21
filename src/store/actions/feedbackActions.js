import { createAction } from './index';
import {
  FEEDBACK_LIST,
  IS_FEEDBACKS_FETCHING,
  FEEDBACK_LIST_ERROR,
  IS_FEEDBACK_TREND_FETCHING,
  FEEDBACK_TREND,
  FEEDBACK_TREND_ERROR,
  UPDATE_FEEDBACK,
} from '../../constants';
import { fetchData } from '../../core/api';
import {
  getFeedbacksUrl,
  getFeedbackTrendUrl,
  postFeedbackUrl,
} from '../../core/api/endpoints';

const requestOptions = {
  method: 'GET',
};

/**
 * getFeedbacks function
 * Dispatch IS_FEEDBACKS_FETCHING action and calls api api/v1/feedbacks
 * Dispatch FEEDBACK_LIST action once api is done to update the list of feedbacks received from api
 * Dispatch FEEDBACK_LIST_ERROR action if api call is failed
 */
export function getFeedbacks() {
  return (dispatch) => {
    dispatch(createAction(IS_FEEDBACKS_FETCHING, {}));
    return fetchData(requestOptions, getFeedbacksUrl)
      .then((results) => {
        if (results && results.feedbacks) {
          dispatch(createAction(FEEDBACK_LIST, {
            data: results.feedbacks,
          }));
        } else {
          dispatch(createAction(FEEDBACK_LIST_ERROR, {}))
        }
      });
  }
};

/**
 * getFeedbackTrendData function
 * Dispatch IS_FEEDBACK_TREND_FETCHING action and calls api api/v1/feedback/analytics
 * Dispatch FEEDBACK_TREND action once api is done to update the trend data received from api
 * Dispatch FEEDBACK_TREND_ERROR action if api call is failed
 */
export function getFeedbackTrendData() {
  return (dispatch) => {
    dispatch(createAction(IS_FEEDBACK_TREND_FETCHING, {}));
    return fetchData(requestOptions, getFeedbackTrendUrl)
      .then((results) => {
        if (results) {
          dispatch(createAction(FEEDBACK_TREND, {
            data: results,
          }));
        } else {
          dispatch(createAction(FEEDBACK_TREND_ERROR, {}))
        }
      });
  }
}

/**
 * saveFeedback function
 * Post the feedback form data to api api/v1/feedback
 * Dispatch UPDATE_FEEDBACK action once api is done to update the
 * feedback data to reflect the trend graph and feedbacks shown
 */
export function saveFeedback(postData) {
  return (dispatch) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData)
    };
    return fetchData(requestOptions, postFeedbackUrl)
      .then((results) => {
        if(results && results.status === 'success') {
          const createdDate = postData.createdDate;
          const data = {
            feedback: postData,
            createdDate,
          }
          dispatch(createAction(UPDATE_FEEDBACK, {
            data,
          }));
          return data;
        }
      });
  }
}