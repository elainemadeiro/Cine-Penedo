import React from "react"; // Importa a biblioteca React para poder criar componentes

// Componente Sessao recebe dois valores: sessao (dados do filme) e reservarLugar (função para reservar)
export default function Sessao({ sessao, reservarLugar }) {

  return (
    <div className="sessao"> {/* Container individual para cada filme */}
      
      <h3>{sessao.filme}</h3> {/* Nome do filme */}
      
      <p><b>Data:</b> {sessao.data}</p> {/* Data da sessão */}
      
      <p>{sessao.resumo}</p> {/* Resumo do filme */}

      {/* Botão para reservar um lugar */}
      <button
        onClick={() => reservarLugar(sessao.id)} // Quando clicado, chama a função de reserva passando o id da sessão
        disabled={sessao.reservas >= 144} // Desabilita o botão se todas as 144 vagas já foram reservadas
      >
        Reservar
      </button>

    </div>
  );
}
