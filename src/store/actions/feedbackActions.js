import { createAction } from './index';
import { FEEDBACK_LIST, IS_FEEDBACKS_FETCHING, FEEDBACK_LIST_ERROR } from '../../constants';
import { fetchData } from '../../core/api';
import {
  getFeedbacksUrl,
} from '../../core/api/endpoints';

export function getFeedbacks() {
  return (dispatch) => {
    dispatch(createAction(IS_FEEDBACKS_FETCHING, {}));
    const requestOptions = {
      method: 'GET',
    };
    fetchData(requestOptions, getFeedbacksUrl)
    .then((results) => {
      if(results && results.feedbacks) {
        dispatch(createAction(FEEDBACK_LIST, {
          data: results.feedbacks,
        }));
      } else {
        dispatch(createAction(FEEDBACK_LIST_ERROR, {}))
      }
    });
  }
};