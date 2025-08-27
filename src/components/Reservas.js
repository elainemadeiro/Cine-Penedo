import React from "react"; // Importa a biblioteca React para usar JSX e criar componentes

// Componente Reservas recebe a lista de sessões do App.js.
export default function Reservas({ sessoes }) {
  return (
    <div className="reservas"> {/* Container principal das reservas */}

      <h2>Reservas</h2> {/* Título*/}
      <ul>
        {/* Percorre todas as sessões e cria um item de lista para cada */}
        
        {sessoes.map((sessao) => (
          <li key={sessao.id}> 
            {/* para o React identificar cada item de forma única */}

            {sessao.filme}: {sessao.reservas} reservas {/* Mostra o nome do filme e a quantidade de reservas */}
          </li>
        ))}
      </ul>
    </div>
  );
}