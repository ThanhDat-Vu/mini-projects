import React from 'react';
import { createRoot } from 'react-dom';
import Transcript from './Transcript';

function App() {
  return React.createElement('h1', {}, [
    React.createElement(Transcript, {
      subcategory: 'Season 1',
      index: '01',
      title: 'Pilot',
    }),
    React.createElement(Transcript, {
      subcategory: 'Season 1',
      index: '01',
      title: 'Sweet Taste of Liberty',
    }),
    React.createElement(Transcript, {
      subcategory: 'Season 1',
      index: '01',
      title: 'Return of the Shirt',
    }),
  ]);
}

const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));
