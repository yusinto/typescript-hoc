import * as React from 'react';
import withData, { InjectedProps } from './withData';

const Home = ({ data: { title, body } }: InjectedProps) => (
  <div>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

export default withData(Home, 'https://jsonplaceholder.typicode.com/posts/1');
