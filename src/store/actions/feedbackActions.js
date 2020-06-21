import moment from 'moment';
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