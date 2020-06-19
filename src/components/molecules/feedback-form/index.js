import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './feedback-form.scss';

const BLOCK_NAME = 'feedbackform';
export default class FeedbackForm extends React.Component {

  state = {
    name: '',
    email: '',
    rating: '1',
    comment: '',
  };

  onSubmit = event => {
    event.preventDefault();
    alert("form valid");
  }

  onInputChange = (e, inputName) => {
    this.setState({
      [inputName]: e.target.value,
    })
  }

  render() {
    const {
      name,
      email,
      rating,
      comment,
    } = this.state;
    return (
      <div className={BLOCK_NAME}>
        <div className="panel-wrapper">
          <div className="panel-container">
            <h2>Feedback Form</h2>
            <div className={`${BLOCK_NAME}_container`}>
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    value={name}
                    placeholder="Enter name"
                    onChange={e => this.onInputChange(e, 'name')}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    value={email}
                    type="email"
                    placeholder="Enter email"
                    onChange={e => this.onInputChange(e, 'email')}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="rating">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control as="select" value={rating} onChange={e => this.onInputChange(e, 'rating')} required>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="comment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    value={comment}
                    placeholder="Enter comments"
                    onChange={e => this.onInputChange(e, 'comment')}
                    required
                  />
                </Form.Group>

                <Button variant="danger" type="submit">
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
