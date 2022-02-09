import React from 'react'
import Headline from '../headline/headline';
import './greet.css';



export default function Greet({ message }) {
  return <Headline className="greetingMessage">안녕 React 😃 {message}</Headline>;
}
