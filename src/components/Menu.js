import React from "react"; // Importa a biblioteca React para usar JSX

import Sessao from "./Sessao"; // Importa o componente que representa cada sessão de filme

// Componente Menu recebe dois valores: sessoes (lista de filmes) e reservarLugar (função para reservar)
export default function Menu({ sessoes, reservarLugar }) {
  return (
    <div className="menu"> {/* Container da programação */}
      <h2>Programação</h2> {/* Título da seção, fica fora dos cards */}

      {/* Percorre todas as sessões e cria um card individual para cada filme */}
      {sessoes.map((sessao) => (
        <Sessao 
          key={sessao.id} // Identificador único para cada card
          sessao={sessao} // Dados da sessão (filme, data, resumo, reservas) para o React 
          reservarLugar={reservarLugar} // Função de reserva para o card
        />
      ))}
    </div>
  );
}

