import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//const x = React.createElement('h1', null, "This is good");
// const X = () => {
//   return <h1>This is good</h1>;
// };

//Componente hijo 
// const Li = ({ children, position, state }) => <li>{children} - {position} ({state})</li>;

// //Componente con la logica y la vista 
// const X = () => {
    
//     return (
//         <ul>
//             <Li 
//             position = {1}
//             state = {"Happy"}
//             >Numero</Li>

//             <Li 
//             position = {2}
//             state = {"Sad"}
//             >Numero</Li>
//         </ul>
//     );
// }

// //Metodo que renderiza mis componentes
// ReactDOM.render(
//   <X/>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
