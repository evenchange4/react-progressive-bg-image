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
  imagePromise = loadImage, // :: string => promise => ({ src, isCached })
  t = DELAY, // delay in milliseconds
  scheduler = async, // rx scheduler
) {
  const props$ = Observable.from(propStream);
  const placeholder$ = props$.pluck('placeholder');
  const imagePromise$ = props$
    .pluck('src')
    .switchMap(imagePromise)
    .startWith({ src: '', isCached: false });

  const src$ = imagePromise$.pluck('src').filter(src => !!src);
  const isCached$ = imagePromise$.pluck('isCached').distinctUntilChanged();

  const isLoaded$ = Observable.merge(
    placeholder$.mapTo(Observable.of(false)),
    imagePromise$.map(({ isCached }) =>
      Observable.of(true).delay(isCached ? 0 : t, scheduler),
    ),
  )
    .switch()
    .startWith(false)
    .distinctUntilChanged();

  const image$ = placeholder$.merge(src$).distinctUntilChanged();

  return props$.combineLatest(
    image$,
    isCached$,
    isLoaded$,
    (props, image, isCached, isLoaded) => ({
      ...props,
      image,
      isCached,
      isLoaded,
    }),
  );
}

export default compose(
  setDisplayName('ProgressiveImage'),
  setPropTypes({
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    opacity: PropTypes.number,
    blur: PropTypes.number,
    scale: PropTypes.number,
    component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  }),
  defaultProps({
    opacity: 0.5,
    blur: 20,
    scale: 1,
    transition: 'opacity 0.3s linear',
    component: 'div',
  }),
  mapPropsStream(ownerPropsToChildProps),
)(Img);
