import React from 'react';
import PropTypes from 'prop-types';
import componentFromStream from 'recompose/componentFromStream';
import { Observable } from 'rxjs/Observable';
import { async } from 'rxjs/scheduler/async';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import Img from './Img';
import loadImage from './loadImage';

export const DELAY = 200;

export const propStreamMapper$ = (
  propStream,
  imagePromise = loadImage,
  t = DELAY,
  scheduler = async,
) => {
  const props$ = Observable.from(propStream);
  const placeholder$ = props$.pluck('placeholder');
  const src$ = props$.pluck('src').switchMap(imagePromise).startWith('');

  const isLoaded$ = Observable.merge(
    placeholder$.mapTo(false),
    src$
      .filter(src => !!src)
      .switchMapTo(Observable.of(true).delay(t, scheduler)),
  )
    .startWith(false)
    .distinctUntilChanged();

  const image$ = placeholder$.merge(src$);

  return props$.combineLatest(image$, isLoaded$);
};

const ProgressiveImage = componentFromStream(propStream => {
  return propStreamMapper$(
    propStream,
  ).map(([{ placeholder, className }, image, isLoaded]) => (
    <Img className={className} image={image} isLoaded={isLoaded} />
  ));
});

ProgressiveImage.displayName = 'ProgressiveImage';
ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default ProgressiveImage;
