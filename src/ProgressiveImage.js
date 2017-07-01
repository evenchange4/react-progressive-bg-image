import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import defaultProps from 'recompose/defaultProps';
import setPropTypes from 'recompose/setPropTypes';
import mapPropsStream from 'recompose/mapPropsStream';
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
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import Img from './Img';
import loadImage from './loadImage';

export const DELAY = 200;

export function ownerPropsToChildProps(
  propStream, // ownerProps
  imagePromise = loadImage, // :: string => promise
  t = DELAY, // delay in milliseconds
  scheduler = async, // rx scheduler
) {
  const props$ = Observable.from(propStream);
  const placeholder$ = props$.pluck('placeholder');
  const src$ = props$.pluck('src').switchMap(imagePromise).startWith('');

  const isLoaded$ = Observable.merge(
    placeholder$.mapTo(Observable.of(false)),
    src$.filter(src => !!src).mapTo(Observable.of(true).delay(t, scheduler)),
  )
    .switch()
    .startWith(false)
    .distinctUntilChanged();

  const image$ = placeholder$.merge(src$);

  return props$.combineLatest(image$, isLoaded$, (props, image, isLoaded) => ({
    ...props,
    image,
    isLoaded,
  }));
}

export default compose(
  setDisplayName('ProgressiveImage'),
  setPropTypes({
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    opacity: PropTypes.number,
    blur: PropTypes.number,
    scale: PropTypes.number,
  }),
  defaultProps({
    opacity: 0.5,
    blur: 20,
    scale: 1,
  }),
  mapPropsStream(ownerPropsToChildProps),
)(Img);
