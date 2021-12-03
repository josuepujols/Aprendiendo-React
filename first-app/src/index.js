import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// const element = React.createElement("h2", null, "This is a element");
/*
const Li = ( {children, value1, isPerson} ) => {
  let message = "";
  if (isPerson) {
    message = " es una persona.";
  }
  else {
    message = " no es una persona";
  }

  return (
    <li>{value1}  {message}</li>
  );
}
const Element = () => {
  return (
    <ul>
      <Li 
      value1={"First"}
      isPerson = {true}
      ></Li>

      <Li 
      value1={"Second"}
      isPerson = {false}
      ></Li>

      <Li 
      value1={"Third"}
      isPerson = {true}
      ></Li>
    </ul>
  );
}
ReactDOM.render(
  <Element/>,
  document.getElementById('root')
);
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
