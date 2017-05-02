import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import componentFromStream from 'recompose/componentFromStream';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(src);
    image.onerror = err => reject(err);
    image.src = src;
  });
}

const Img = styled.div`
  height: 100%;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  transition: opacity 0.3s linear;

  opacity: ${props => (props.isLoaded ? 1 : 0.5)};
  filter: ${props => (props.isLoaded ? 'none' : 'blur(20px)')};
  /* this is needed so Safari keeps sharp edges */
  transform: ${props => (props.isLoaded ? 'none' : 'scale(1)')};
`;

const DELAY = 200;

const ProgressiveImage = componentFromStream(propStream => {
  const props$ = Observable.from(propStream);
  const placeholder$ = props$.pluck('placeholder');
  const src$ = props$.pluck('src').switchMap(loadImage).startWith('');

  const isLoaded$ = Observable.merge(
    placeholder$.mapTo(false),
    src$.filter(src => !!src).switchMapTo(Observable.of(true).delay(DELAY)),
  ).startWith(false);

  const image$ = placeholder$.merge(src$);

  return props$.combineLatest(
    image$,
    isLoaded$,
    ({ placeholder, ...otherProps }, image, isLoaded) => (
      <Img {...otherProps} image={image} isLoaded={isLoaded} />
    ),
  );
});

ProgressiveImage.displayName = 'ProgressiveImage';
ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default ProgressiveImage;
