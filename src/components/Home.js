import React from 'react';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function home() {
  return (
    <div>
      <p style={s.p}>
        This is an example single page app built
        with React and React&nbsp;Router using {' '}
        <Code>BrowserRouter</Code>. Navigate with the links below and
        refresh the page or copy/paste the url to test out the redirect
        functionality deployed to overcome GitHub&nbsp;Pages incompatibility
        with single page apps (like this one).
      </p>
      <p style={s.p}>
        Please see the repo readme for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </p>
    </div>
  );
}