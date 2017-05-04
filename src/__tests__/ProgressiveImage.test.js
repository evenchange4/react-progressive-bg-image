import React from 'react';
import Rx from 'rxjs';
import R from 'ramda';
import { mount } from 'enzyme';
import ProgressiveImage, {
  DELAY,
  propStreamMapper$,
} from '../ProgressiveImage';

const jestRxAssert = (actual, expected) => {
  const isEqual = R.equals(actual, expected);
  if (!isEqual) {
    console.error('Actual:', actual, '\n\n', 'Expected:', expected); // eslint-disable-line
    console.log(JSON.stringify(actual, null, 2));
  }
  expect(isEqual).toBe(true);
};

it('should return DELAY constant', () => {
  expect(DELAY).toBe(200);
});

it('should render <ProgressiveImage>', done => {
  const wrapper = mount(
    <ProgressiveImage src="origin.jpg" placeholder="small.jpg" />,
  );

  expect(wrapper).toMatchSnapshot('1. before resolving image');

  setTimeout(() => {
    expect(wrapper).toMatchSnapshot('2. after resolving image');
    done();
  }, 250);
});

it('should return correct props marble diagram with one image', () => {
  const scheduler = new Rx.TestScheduler(jestRxAssert);
  const sourceMarble = 'x---------|';
  const resultMarble = '(12)-3--4-|';
  const props = { placeholder: 'small.jpg', src: 'origin.jpg' };
  const props$ = scheduler.createHotObservable(sourceMarble, {
    x: props,
  });
  const mockImagePromise = src => Rx.Observable.of(src).delay(50, scheduler);
  const source = propStreamMapper$(props$, mockImagePromise, 30, scheduler);
  const values = {
    1: [props, '', false],
    2: [props, 'small.jpg', false],
    3: [props, 'origin.jpg', false],
    4: [props, 'origin.jpg', true],
  };
  scheduler.expectObservable(source).toBe(resultMarble, values);
  scheduler.flush();
});

it('should return correct props marble diagram with two image', () => {
  const scheduler = new Rx.TestScheduler(jestRxAssert);
  const sourceMarble = 'x--------y---------|';
  const resultMarble = '(12)-3--4(abc)d--e-|';
  const props1 = { placeholder: 'small.jpg', src: 'origin.jpg' };
  const props2 = { placeholder: 'small2.jpg', src: 'origin2.jpg' };
  const props$ = scheduler.createHotObservable(sourceMarble, {
    x: props1,
    y: props2,
  });
  const mockImagePromise = src => Rx.Observable.of(src).delay(50, scheduler);
  const source = propStreamMapper$(props$, mockImagePromise, 30, scheduler);
  const values = {
    1: [props1, '', false],
    2: [props1, 'small.jpg', false],
    3: [props1, 'origin.jpg', false],
    4: [props1, 'origin.jpg', true],
    a: [props2, 'origin.jpg', true],
    b: [props2, 'small2.jpg', true],
    c: [props2, 'small2.jpg', false],
    d: [props2, 'origin2.jpg', false],
    e: [props2, 'origin2.jpg', true],
  };
  scheduler.expectObservable(source).toBe(resultMarble, values);
  scheduler.flush();
});

it('should return correct props marble diagram with two image at loading time', () => {
  const scheduler = new Rx.TestScheduler(jestRxAssert);
  const sourceMarble = 'x-----y--------|';
  const resultMarble = '(12)-3(ab)-c--d|';
  const props1 = { placeholder: 'small.jpg', src: 'origin.jpg' };
  const props2 = { placeholder: 'small2.jpg', src: 'origin2.jpg' };
  const props$ = scheduler.createHotObservable(sourceMarble, {
    x: props1,
    y: props2,
  });
  const mockImagePromise = src => Rx.Observable.of(src).delay(50, scheduler);
  const source = propStreamMapper$(props$, mockImagePromise, 30, scheduler);
  const values = {
    1: [props1, '', false],
    2: [props1, 'small.jpg', false],
    3: [props1, 'origin.jpg', false],
    a: [props2, 'origin.jpg', false],
    b: [props2, 'small2.jpg', false],
    c: [props2, 'origin2.jpg', false],
    d: [props2, 'origin2.jpg', true],
  };
  scheduler.expectObservable(source).toBe(resultMarble, values);
  scheduler.flush();
});
