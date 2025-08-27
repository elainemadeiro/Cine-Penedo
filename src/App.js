import React, { useState } from "react"; 
// Importa o React e o hook useState para criar estados dentro do componente

import Menu from "./components/Menu"; 
// Importa o componente Menu, para mostrar a programação dos filmes

import Reservas from "./components/Reservas"; 
// Importa o componente Reservas, para exibir a lista de reservas atuais



// Lista inicial de sessões com informações dos filmes
const sessoesIniciais = [
  {
    id: 1,
    filme: "O Auto da Compadecida",
    data: "10/11/2025",
    resumo: "Uma comédia brasileira clássica que mistura humor e crítica social.",
    reservas: 0, // Inicialmente não há reservas
  },
  {
    id: 2,
    filme: "Central do Brasil",
    data: "11/11/2025",
    resumo: "A emocionante jornada de uma ex-professora e um garoto em busca do pai.",
    reservas: 0,
  },
  {
    id: 3,
    filme: "Bacurau",
    data: "12/11/2025",
    resumo: "Um pequeno povoado do sertão descobre que não está mais no mapa.",
    reservas: 0,
  },
];

// Cria as funções do App
export default function App() {

  // Cria o estado 'sessoes', podendo ser atualizado
  const [sessoes, setSessoes] = useState(sessoesIniciais);

  // Função para reservar um lugar em uma sessão
  const reservarLugar = (id) => {
    setSessoes(
      sessoes.map((sessao) =>
        sessao.id === id && sessao.reservas < 144
          ? { ...sessao, reservas: sessao.reservas + 1 } 
          : sessao 
      )
    );
  };

  return (
    <div className="container">
      {/* Bloco com o texto histórico do Cine Penedo */}

      <div className="historia">
        <h1>Cine Penedo</h1>
        <p>
          <strong>O Cine Penedo é um marco histórico e cultural da cidade de Penedo-AL, </strong>
          com raízes que remontam a 1958, quando foi inaugurado sob o nome de 
          <i>Cinema São Francisco</i>. Durante três décadas, de 1958 a 1980, o cinema 
          se destacou como um polo de referência no cenário audiovisual de Alagoas 
          e do Brasil, acolhendo gerações de cinéfilos e fortalecendo a cultura cinematográfica.
        </p>
        <p>
          Após mais de 40 anos de inatividade, o imóvel foi adquirido pelo IPHAN e 
          cedido à Universidade Federal de Alagoas (Ufal), abrindo caminho para sua 
          recuperação e preservação como patrimônio cultural.
        </p>
        <p>
          Em novembro de 2023, o espaço foi reaberto ao público, agora funcionando 
          como centro cultural, consolidando-se como um local de encontros artísticos, 
          formação e difusão cultural.
        </p>
        <p>
          Hoje, o espaço não apenas resgata a memória histórica do cinema, mas também 
          se projeta como um ponto de referência para atividades culturais, reafirmando 
          sua importância na vida social e artística de Penedo.
        </p>
      </div>

      {/* Componente Menu: exibe a programação dos filmes com botão de reserva */}
      <Menu sessoes={sessoes} reservarLugar={reservarLugar} />

      {/* Componente Reservas: mostra as reservas atuais */}
      <Reservas sessoes={sessoes} />
    </div>
  );
}
