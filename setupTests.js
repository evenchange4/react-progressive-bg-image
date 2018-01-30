import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

/**
 * Hint: mock for snapshot
 * ref: https://github.com/storybooks/storybook/issues/1011#issuecomment-322698049
 */
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));
