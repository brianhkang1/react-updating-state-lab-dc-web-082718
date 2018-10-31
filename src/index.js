import React from 'react';
import ReactDOM from 'react-dom';

import DigitalClicker from './components/DigitalClicker';
import YouTubeDebugger from './components/YouTubeDebugger';

ReactDOM.render(
  <div>
    <div><DigitalClicker /></div>
    <YouTubeDebugger />
  </div>,
  document.getElementById('global')
);
