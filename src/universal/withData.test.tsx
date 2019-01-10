import 'jest-fetch-mock';
import * as React from 'react';
import { create } from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import withData, { EnhancedComponent, InjectedProps, Post } from './withData';

interface Data {
  title?: string;
  body?: string;
}

interface DataRoot {
  data?: Data;
}
const { fetch } = global;
const mockFetchUrl = 'https://api.yus.com/post/1';
const App = (props: DataRoot) => (
  <div>
    {props.data && props.data.title}
    <br />
    {props.data && props.data.body}
  </div>
);
const mockResponse = {
  userId: 6,
  id: 5,
  title: 'Test title',
  body: 'This is a test body',
} as Post;

describe('withData', () => {
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponse(JSON.stringify(mockResponse));
  });

  test('renders loading initially', async () => {
    const Enhanced = withData(App, mockFetchUrl);
    const component = create(<Enhanced />);
    expect(component).toMatchSnapshot();
  });

  test.only('componentDidMount fetches data', async () => {
    const Enhanced = withData(App, mockFetchUrl);
    const component = mount(<Enhanced />);
    const instance = component.instance() as EnhancedComponent;
    await instance.componentDidMount();

    component.update();
    // expect(fetch.mock.calls.length).toEqual(1);
    // expect(fetch.mock.calls[0][0]).toEqual(mockFetchUrl);
    expect(component).toMatchSnapshot();
  });

  test('fetchData', () => {});

  test('render loading', () => {});

  test('render component', () => {});
});
