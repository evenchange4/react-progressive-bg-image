import { from, merge, of, Observable, type, Observable as ObservableType } from 'rxjs';
import {map, switchMap, startWith, filter, distinctUntilChanged, mapTo, delay, switchAll} from 'rxjs/operators';
// @flow
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import setDisplayName from 'recompose/setDisplayName';
import defaultProps from 'recompose/defaultProps';
import setPropTypes from 'recompose/setPropTypes';
import mapPropsStream from 'recompose/mapPropsStream';
import { async } from 'rxjs/scheduler/async';
import Img from './Img';
import loadImage, { type LoadImage } from './loadImage';

export const DELAY = 200;

export function ownerPropsToChildProps(
  propStream: Observable<{
    src: string,
    placeholder: string,
    opacity: number,
    blur: number,
    scale: number,
    component: React.Node,
  }>, // ownerProps
  load: LoadImage = loadImage,
  t: number = DELAY, // delay in milliseconds
  scheduler: any = async, // rx scheduler
): ObservableType<{
  src: string,
  placeholder: string,
  opacity: number,
  blur: number,
  scale: number,
  component: React.Node,
  image: string,
  isCached: boolean,
  isLoaded: boolean,
}> {
  const props$ = from(propStream);
  const placeholder$ = props$.pipe(map(e => e.placeholder));
  const imagePromise$ = props$.pipe(map(e => e.src), switchMap(load), startWith({ src: '', isCached: false }));

  const src$ = imagePromise$.pipe(map(e => e.src), filter(src => !!src));
  const isCached$ = imagePromise$.pipe(map(e => e.isCached), distinctUntilChanged());

  const isLoaded$ = merge(
    placeholder$.pipe(mapTo(of(false))),
    imagePromise$.pipe(map(({ isCached }) =>
      of(true).pipe(delay(isCached ? 0 : t, scheduler)))),
  ).pipe(switchAll(), startWith(false), distinctUntilChanged());

  const image$ = merge(placeholder$, src$).pipe(distinctUntilChanged());

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
