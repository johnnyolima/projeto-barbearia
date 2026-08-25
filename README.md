# Navalha de Ouro

Projeto acadêmico de Front-End do curso de Análise e Desenvolvimento de Sistemas (ADS).

A proposta é simular o site de uma barbearia com fluxo público e área do cliente. O projeto usa **HTML5, CSS3 e JavaScript puro**, sem frameworks. O JavaScript foi mantido somente nas partes em que ele é necessário para atender ao enunciado: validações, API ViaCEP, `localStorage`, sessão, acessibilidade e exibição dos dados enviados.

## Objetivo

Praticar os fundamentos de desenvolvimento Front-End enquanto a equipe constrói um projeto que consiga explicar, alterar e testar. Uma tarefa só deve ser considerada concluída quando o integrante responsável consegue explicar o código correspondente.

## Funcionalidades

### Fluxo público

- página inicial com apresentação e catálogo;
- menu com submenu de categorias;
- página de serviços;
- página de produtos;
- cadastro de usuário;
- login;
- página personalizada `404.html` para erro de navegação e acesso sem autenticação.

### Área restrita

- painel do cliente;
- nome do usuário logado no cabeçalho;
- botão de logout;
- formulário de feedback com `select`, `radio`, `checkbox` e `range`;
- página de confirmação com os dados enviados.

### Cadastro e armazenamento

- nome entre 15 e 80 caracteres, somente letras e espaços;
- CPF com validação dos dígitos verificadores;
- CEP consultado pela API ViaCEP;
- preenchimento automático de rua, bairro, cidade e UF;
- máscaras de telefone e celular no formato `(+55)XX-XXXXXXXX`;
- login com exatamente 6 letras;
- senha com exatamente 8 letras;
- confirmação de senha;
- dados, sessão e feedback salvos no `localStorage` como JSON.

### Acessibilidade e responsividade

- tema claro/escuro com preferência salva no navegador;
- botões A+ e A- para alterar o tamanho do conteúdo;
- foco visível para navegação por teclado;
- layout adaptado para celular, tablet e desktop.

## Estrutura de arquivos

```text
projeto-barbearia/
├── index.html
├── servicos.html
├── produtos.html
├── cadastro.html
├── login.html
├── 404.html
├── painel.html
├── feedback.html
├── meus-dados.html
├── css/
│   └── estilo.css
├── js/
│   ├── dados.js
│   ├── comum.js
│   ├── cadastro.js
│   ├── login.js
│   ├── feedback.js
│   └── meus-dados.js
├── assets/
│   └── hero-barbearia.jpg
├── materiais/
│   └── guia-estudo-navalha-de-ouro.pdf
├── REQUISITOS.md
├── TESTES.md
└── README.md
```

## Como executar

O projeto não precisa de instalação.

1. Baixe ou clone o repositório.
2. Abra a pasta no VS Code.
3. Abra `index.html` com a extensão Live Server ou outro servidor local.
4. Faça um cadastro antes de testar o login.

> A consulta de CEP depende de acesso à internet porque utiliza a API ViaCEP.

## Ordem recomendada de estudo

1. Estrutura de pastas e links entre páginas.
2. HTML e tags semânticas.
3. CSS, layout e responsividade.
4. Fundamentos de JavaScript.
5. DOM e eventos.
6. Formulários e validações.
7. `localStorage` e JSON.
8. API ViaCEP.
9. Login, sessão e proteção das páginas.
10. Acessibilidade.
11. Testes, Git, GitHub e publicação.
12. Preparação para a apresentação.

## Divisão equilibrada entre quatro integrantes

A divisão abaixo distribui HTML, CSS, JavaScript e testes entre todos. Os nomes podem ser substituídos pelos nomes reais do grupo.

### Integrante 1 - Página inicial, serviços e acessibilidade

- **Páginas:** `index.html` e `servicos.html`.
- **CSS:** cabeçalho, menu, hero, cards e primeira parte da responsividade em `css/estilo.css`.
- **JavaScript:** botões A+/A- e tema em `js/comum.js`.
- **Estudar:** HTML semântico, links, `details/summary`, Flexbox/Grid, eventos de clique e `localStorage` das preferências.
- **Testar:** navegação, submenu, acessibilidade e telas de 375 px e 768 px.
- **Concluído quando:** consegue explicar e alterar menu, hero, cards e os controles de acessibilidade.

### Integrante 2 - Produtos e cadastro

- **Páginas:** `produtos.html` e `cadastro.html`.
- **CSS:** cards de produtos, formulário e mensagens de validação.
- **JavaScript:** máscaras, validações simples e consulta do CEP em `js/cadastro.js`.
- **Estudar:** formulários, eventos `input`, `blur` e `submit`, expressões regulares básicas e `fetch`.
- **Testar:** nome, CEP, telefones, login, senha e confirmação.
- **Concluído quando:** consegue explicar o formulário, provocar um erro de validação e corrigir o código de uma regra simples.

### Integrante 3 - Dados, CPF, login e sessão

- **Páginas:** `login.html` e `painel.html`.
- **CSS:** login, painel e área do usuário no cabeçalho.
- **JavaScript:** `js/dados.js`, `js/login.js` e parte de sessão em `js/comum.js`.
- **Estudar:** funções, `if/else`, repetição `for`, JSON, `localStorage`, algoritmo de CPF e redirecionamento.
- **Testar:** CPF válido/inválido, login correto/incorreto, persistência do nome e logout.
- **Concluído quando:** consegue explicar como o cadastro vira JSON, como o login compara os dados e por que as páginas restritas exigem sessão.

### Integrante 4 - Feedback, confirmação, erro e testes finais

- **Páginas:** `feedback.html`, `meus-dados.html` e `404.html`.
- **CSS:** grupos de opções, lista de dados, página de erro e revisão desktop.
- **JavaScript:** `js/feedback.js` e `js/meus-dados.js`.
- **Estudar:** DOM, `querySelector`, `forEach`, `radio`, `checkbox`, `range`, criação de elementos e testes de fluxo.
- **Testar:** acesso sem login, envio do feedback, confirmação dos dados, página 404 e links relativos.
- **Concluído quando:** consegue explicar como os campos são lidos, salvos e exibidos sem usar `alert()`.

## Requisitos e testes

A rastreabilidade completa entre o enunciado do professor, o estado anterior e a implementação final está em [`REQUISITOS.md`](REQUISITOS.md).

Os testes realmente executados e as pendências de ambiente estão registrados em [`TESTES.md`](TESTES.md). Na revisão final, os 6 arquivos JavaScript passaram na verificação de sintaxe e 17 de 17 testes automatizados de lógica foram aprovados.

## Publicação

Endereço esperado do GitHub Pages:

`https://johnnyolima.github.io/projeto-barbearia/`

Para publicar pela raiz do repositório, em **Settings > Pages** use:

- Source: `Deploy from a branch`;
- Branch: `main`;
- Folder: `/(root)`.

## Entregas externas que não podem ser criadas pelo código

- **Figma:** o professor exige um link para o protótipo de alta fidelidade. Esse link ainda precisa ser criado/inserido pela equipe.
- **AVA:** o envio dos links do GitHub e do site deve ser realizado pela equipe na plataforma acadêmica.

## Observação de segurança

Este é um projeto exclusivamente Front-End. A senha fica no `localStorage` em texto simples somente para simular o exercício acadêmico. Em um sistema real, autenticação e senhas devem ser tratadas em um servidor com práticas adequadas de segurança.
