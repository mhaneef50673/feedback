import React from 'react';
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import CommentView from './index';

describe('Comment View Component', () => {
  it('should render the component', () => {
    const tree = mount(
      <CommentView
        comment={{
          name: 'Mohamed Haneef',
          email: 'test@gmail.com',
          rating: '5',
          comment: 'test comment',
          createdDateTime: 1587327728843
        }}
      />
    )
    expect(mountToJson(tree)).toMatchSnapshot();
  });
});