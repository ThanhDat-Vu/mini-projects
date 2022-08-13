import React from 'react';

export default function Transcript(props) {
  return React.createElement('div', {}, [
    React.createElement('span', {}, props.subcategory),
    React.createElement('span', {}, props.index),
    React.createElement('h3', {}, props.title),
  ]);
}
