<div>
  <h1>👋 Projeto de tecnologias emergentes. </h1>
  <p>Esse projeto consiste em um formulário de cadastro para receber novidades e promoções de um site chamado "Encontre aqui" que vende roupas e sapatos de diferentes marcas famosas. Essa aplicação tem como objetivo salvar os dados do cliente que quer receber informações sobre os produtos do site, guardando seu nome, email, marca favorita, tamanho pessoal de roupas e calçados. Dessa forma é possível receber diretamente no email as peças que o cliente deseja e ainda receber promoções das suas marcas favoritas, tudo com base nos dados coletados.</p>  
  <p>O código foi escrito em JavaScript, uma linguagem que é muito utilizada para desenvolvimento web e mobile. Os frameworks e bibliotecas usadas foram o react native que permite criar aplicativos nativos tanto para o IOS como para o sistema Android, usando react e javascript. Além disso teve o uso do firebase, que é uma plataforma desenvolvida pelo google para criar aplicaitovs móveis e web. De forma específica foi utilizado o firebase realtime database que é um banco de dados hospedado na nuvem e que armazena dados em formato JSON, sincronizando dados entre usuários em tempo real. O banco de dados é acessado através de referência 'firebase.database().ref('produtos1), no qual vai ser feitas operações de leitura, escrita e remoção. </p>
  <p>Funcionamento do código: 'dadosForm' é o estado que guarda os dados preenchidos pelo usuário no formulário; 'listaProdutos' vai armazenar a lista dos dados cadastrados, obtidos no firebase; 'mensagemErro' exibe mensagens de erro ao cliente; 'handleChange' atualiza o estado 'dadosForm' conforme o cliente preenche os campos do formulário;'handleSubmit' vai verificar se os campos foram preenchidos e se já tem esses dados cadastrados, adicionando ao firebase e atualizando a lista de cadastros; 'handleDelete' vai remover os dados cadastrados. Além disso, utiliza-se o 'StyleSheet' do react native para estilizar a aplicação.</p>
  <p>Instruções para instalar e executar a aplicação: ter o node.js instalado, instalar o react native, clone o repositório do projeto para o ambiente local, navegue até o diretório e instale as dependências necessárias, fazer a configuração do firebase e depois fazer a execução da aplicação.</p>
  <p>Requisitos de sistema: sistema operacional windows, macOS ou linux; node.js versão 14.x ou superior; npm versão 6.x ou superior; android studio ou xcode para IOS</p>
  <p>Informações para contribuir com o projeto: fazer um fork do repositório para sua conta do github, clonar o repositório para o seu ambiente, criar um branch para as suas contribuições, depois fazer um commit com as mudanças feitas e enviar para o fork do seu github. Por fim, abra um pull request no repositório original descrevendo o que foi feito.</p>
  <p>Práticas de código limpo: cada função tem uma responsabilidade clara e única; nome de variáveis e funções são descritivos e consistentes; mensagens de erro com informações para ajudar a entender o problema e conseguir solucionar; comentários para explicar as partes mais complexas do código.</p>
 <p>Por fim, para a criação de testes automatizados para a aplicação é possível utilizar bibliotecas como o Jest e React Native Testing Library. Você faz a instalação, configuração e depois cria um arquivo de teste para verificar se o formulário é renderizado de forma correta.</p>
</div>

