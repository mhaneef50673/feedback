import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './feedback-form.scss';

const BLOCK_NAME = 'feedbackform';

export default class FeedbackForm extends React.Component {

  render() {
    return (
      <div className={BLOCK_NAME}>
        <div className="panel-wrapper">
          <div className="panel-container">
            <h2>Feedback Form</h2>
            <div className={`${BLOCK_NAME}_container`}>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="rating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="comment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
