import React from 'react';
import { mount } from 'enzyme';
import ProgressiveImage from '../ProgressiveImage';

it('should render <ProgressiveImage>', () => {
  const wrapper = mount(
    <ProgressiveImage src="origin.jpg" placeholder="small.jpg" />,
  );

  expect(wrapper).toMatchSnapshot();
});
