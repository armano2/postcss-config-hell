import * as React from 'react';
import ReactDOM from 'react-dom';

/* Components */
import App from 'App';

/* Styles */
import 'styles/main.css';

/* TODO: Move to packaging service */
const domain = 'mt';
document.documentElement.setAttribute('theme', domain);

const setVhProperty = () =>
  document.documentElement.style.setProperty(
    '--vh',
    `${window.innerHeight * 0.01}px`
  );

/* Set --vh custom property */
setVhProperty();

/* Update --vh custom property on resize and on orientationchange */
['resize', 'orientationchange'].forEach((event) =>
  window.addEventListener(event, setVhProperty, false)
);

ReactDOM.render(<App />, document.getElementById('root'));
