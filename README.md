
Projeto Cine Penedo - Aplicação web 


Sistema Web de Reserva de Ingressos 

Definição do Problema

O projeto tem como objetivo desenvolver um sistema web para a reserva antecipada de ingressos das sessões do Cine Penedo, realizadas semanalmente às quartas-feiras.

Atualmente, os ingressos são distribuídos presencialmente pouco antes da exibição, o que gera: Filas e aglomerações, Incerteza sobre a disponibilidade de assentos e Frustração do público devido à limitação da capacidade (144 lugares).

Além disso, a falta de divulgação antecipada da programação dificulta o planejamento do público. Para administração, o modelo atual de distribuição manual torna a organização mais complexa, podendo resultar tanto em superlotação quanto em assentos vagos.

O sistema proposto resolve esses problemas ao permitir que o público consulte a programação, escolha o filme que deseja assistir e reserve ingressos gratuitamente, respeitando o limite de 144 vagas por sessão, promovendo mais comodidade para os espectadores e um controle eficiente de ocupação para administração.


Estrutura do Sistema

Página inicial : informações sobre o Cine Penedo e acesso à programação e reservas.

Programação : lista de filmes em cartaz e próximos lançamentos, com dados, título e sinopse .

Reserva de ingressos : escolha do filme, da sessão e confirmação da reserva.

Área administrativa : contagem de reservas e gerenciamento das sessões.


Implementação

O sistema foi desenvolvido como uma aplicação web em React , utilizando HTML e CSS .



Estrutura de Componentes

Cabeçalho : barra de navegação e título.

MovieCard : informações dos filmes.

Schedule : exibição de sessões e disponibilidade.

ReservationForm : formulário de reserva.

AdminPanel : painel administrativo com controle de ingressos.



Funcionalidades

Consulta de filmes e sessões : exibe títulos, dados e sinopses.

Reserva de ingressos : o selecione usuário filme,sessão e quantidade de ingressos (máx. 144). O sistema bloqueia reservas quando a capacidade é atingida.



Área administrativa :

Contador de reservas realizadas;

Atualização de filmes e horários.



Estilização e Layout

Uso de Flexbox para organização de caixas e cartões.

Estilização de intervalos, sinopses, e imagens .

Layout responsivo , adaptado para diferentes dispositivos.



Tecnologias Utilizadas

React

HTML

CSS



Estrutura do Projeto

CinePenedo/ (Raiz do projeto)
│
├── public/               
│   └── index.html        # HTML principal
│
├── src/                  
│   ├── index.js          # Ponto de entrada do React
│   ├── App.js            # Componente principal
│   ├── components/       
│   │   ├── Menu.js       # Componente da programação
│   │   ├── Sessao.js     # Componente de sessão
│   │   └── Reservas.js   # Componente de reservas
│   └── style.css         # Estilos
│
└── README.md             # Resumo do projeto



Acesso ao Projeto

Você pode acessar o aplicativo pelo link:
👉 Cine Penedo – Sistema de Reserva