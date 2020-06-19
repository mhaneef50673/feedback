import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FeedbackForm from '../../molecules/feedback-form';
import FeedbackTrend from '../../molecules/feedback-trend';
import FeedbackComments from '../../molecules/feedback-comments';

import './feedback.scss';

const Feedback = props => {
  return (
    <Container>
      <Row>
        <Col>
          <FeedbackForm />
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

export default Feedback;
