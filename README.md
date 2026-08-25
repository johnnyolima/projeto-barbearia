# Navalha de Ouro — projeto acadêmico

Site fictício de uma barbearia desenvolvido apenas com HTML5, CSS3 e JavaScript puro. O código deste projeto foi refeito de forma mais simples.

## Como abrir

Abra o arquivo `index.html` no navegador. O menu permite visitar as quatro páginas principais:

- `index.html`: página inicial e apresentação da barbearia;
- `servicos.html`: cards com serviços e valores;
- `produtos.html`: produtos fictícios com botões demonstrativos;
- `login.html`: formulário com validação simples.

## Divisão sugerida do trabalho

### Integrante 1 — Home

Responsável por `index.html`, `css/home.css` e `js/home.js`. Deve explicar a estrutura semântica, o banner, o menu, o `display: flex` e o evento de clique nos destaques.

### Integrante 2 — Serviços

Responsável por `servicos.html`, `css/servicos.css` e `js/servicos.js`. Deve explicar arrays, repetição com `forEach`, criação de cards e eventos dos botões.

### Integrante 3 — Produtos

Responsável por `produtos.html`, `css/produtos.css` e `js/produtos.js`. Deve explicar como os produtos são guardados em um array e inseridos no HTML com JavaScript.

### Integrante 4 — Login

Responsável por `login.html`, `css/login.css` e `js/login.js`. Deve explicar formulário, `submit`, `preventDefault`, `if/else` e validação dos campos.

## Perguntas que podem aparecer

- **O login é real?** Não. É uma demonstração de validação no navegador; não existe banco de dados.
- **Por que cada página tem um CSS e um JS?** Para mostrar a separação do trabalho de cada integrante e facilitar o estudo.
- **Por que usar HTML semântico?** Tags como `header`, `nav`, `main` e `footer` deixam a estrutura mais clara.
- **O que acontece em telas pequenas?** A regra `@media` permite que o menu e os cards se organizem melhor.
- **O que poderia ser feito em um projeto real?** Um servidor, banco de dados, autenticação segura e sistema de agendamento.
