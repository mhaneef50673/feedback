import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FeedbackForm from '../../molecules/feedback-form';
import FeedbackTrend from '../../molecules/feedback-trend';
import FeedbackComments from '../../molecules/feedback-comments';

// actions
import { getFeedbacks, getFeedbackTrendData, saveFeedback } from '../../../store/actions/feedbackActions';

import './feedback.scss';

const Feedback = props => {
  const { getFeedbacks, getFeedbackTrendData, saveFeedback } = props;

  useEffect(() => {
    getFeedbacks();
    getFeedbackTrendData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <FeedbackForm saveFeedback={saveFeedback} />
        </Col>
        <Col>
          <FeedbackTrend />
        </Col>
      </Row>
      <Row>
        <Col>
          <FeedbackComments />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(null, { getFeedbacks, saveFeedback, getFeedbackTrendData } )(Feedback);
