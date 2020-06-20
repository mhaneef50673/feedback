import { createSelector } from 'reselect';
import get from 'lodash/get';

import {
  FEEDBACK_LIST_STORE_KEY,
  FEEDBACK_TREND_STORE_KEY,
} from '../constants';

const getFeedbackState = state => get(state, `feedbackReducer.${FEEDBACK_LIST_STORE_KEY}`, null);

export const feedbackSelector = createSelector(
  getFeedbackState,
  feedbackState => get(feedbackState, 'feedbacks', []),
);

export const feedbackErrorSelector = createSelector(
  getFeedbackState,
  feedbackState => get(feedbackState, 'isError', false),
);

export const feedbackFetchingSelector = createSelector(
  getFeedbackState,
  feedbackState => get(feedbackState, 'isFetching', false),
);

const getFeedbackTrendState = state => get(state, `feedbackReducer.${FEEDBACK_TREND_STORE_KEY}`, null);
export const feedbackTrendSelector = createSelector(
  getFeedbackTrendState,
  feedbackState => feedbackState,
);