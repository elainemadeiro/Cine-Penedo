import React from "react"; 
// Importa a biblioteca React (criar componentes, JSX e gerenciar o estado da aplicação)

import ReactDOM from "react-dom/client"; 
// Importa o módulo ReactDOM (renderizar a aplicação React na página HTML)

import App from "./App"; 
// Importa o componente principal 'App' do arquivo App.js (ponto de entrada da aplicação, onde toda a interface é estruturada)

import "./styles.css"; 
// Importa o arquivo de estilos CSS que serão aplicados aos componentes renderizados


const root = ReactDOM.createRoot(document.getElementById("root"));
// Seleciona a <div> com id 'root' no HTML e cria nela a raiz do React, que é o ponto onde a aplicação será renderizada

root.render(
  <React.StrictMode>
    <App /> 
    {/* Renderiza o componente principal App dentro do StrictMode e ativa verificações adicionais de boas práticas e avisos durante o desenvolvimento */}
  </React.StrictMode>
);
