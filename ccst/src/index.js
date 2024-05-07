import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ConjuntoClasse from './classesTestes/ConjuntoClasse';


const root = ReactDOM.createRoot(document.getElementById('root'));


// mudando o fundo 
const cc = new ConjuntoClasse()
const conjuntoTristeaza = cc.criarConjunto('tristeza')
const fundo = conjuntoTristeaza.fundo()
document.body.style.backgroundColor = fundo.getColor()

root.render(
  <React.StrictMode >
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

