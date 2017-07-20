import 'jest-styled-components';
import React from 'react';
import { mount } from 'enzyme';
import Img from '../Img';

it('should render <Img> with isLoaded prop', () => {
  const component = (
    <Img
      image="image.jpg"
      isLoaded
      blur={2}
      opacity={0.9}
      scale={1}
      isCached
      component="div"
    />
  );

  expect(mount(component)).toMatchSnapshot();
});

it('should render <Img> without isLoaded prop', () => {
  const component = (
    <Img
      image="image.jpg"
      isLoaded={false}
      blur={2}
      opacity={0.9}
      scale={1}
      isCached={false}
      component="img"
    />
  );

  expect(mount(component)).toMatchSnapshot();
});
