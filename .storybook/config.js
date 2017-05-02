import { configure, addDecorator, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';
import centered from './decorator-centered';

const context = require.context('../src/', true, /\.example\.js$/);

setAddon(infoAddon);
addDecorator(centered);
setOptions({
  name: 'Rrogressive-bg-image',
  url: 'https://github.com/evenchange4/react-progressive-bg-image',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
});

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
