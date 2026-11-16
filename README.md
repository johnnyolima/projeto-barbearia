# Navalha de Ouro ✂️

Portal de divulgação e cadastro de clientes de uma barbearia, desenvolvido como MVP **exclusivamente Front-End**.

| | |
|---|---|
| **Site publicado** | https://johnnyolima.github.io/projeto-barbearia/ |
| **Protótipo no Figma** | [Desktop](https://www.figma.com/proto/2TZwG2Mvrqp7NaLzWawbPR?node-id=3-14&starting-point-node-id=3-14&scaling=scale-down-width&content-scaling=fixed) · [Tablet](https://www.figma.com/proto/2TZwG2Mvrqp7NaLzWawbPR?node-id=9-482&starting-point-node-id=9-482&scaling=min-zoom&content-scaling=fixed) · [Mobile](https://www.figma.com/proto/2TZwG2Mvrqp7NaLzWawbPR?node-id=3-34&starting-point-node-id=3-34&scaling=min-zoom&content-scaling=fixed) |
| **Pré-projeto** | [Wireframes, fluxo, paleta e tipografia](output/pdf/pre-projeto-navalha-de-ouro.pdf) |
| **Instituição** | UNISUAM – Análise e Desenvolvimento de Sistemas |
| **Disciplina** | Projeto de Desenvolvimento em Front-End – 2026.2 |
| **Professor** | Bruno Cezario |

## Equipe

| Integrante | Matrícula | Responsabilidade |
|---|---|---|
| Johnny Oliveira de Lima | 26205643 | Página inicial, serviços, menu e barra de acessibilidade |
| Diogo Oliveira da Silva | 26204770 | Produtos, cadastro, máscaras e consulta de CEP |
| Bruno da Silva Trigo | 26200522 | Login, sessão, validação de CPF e `localStorage` |
| Wector Santos de Souza | 26205309 | Feedback, confirmação dos dados, página 404 e testes |

## Tecnologias

- **HTML5** com tags semânticas (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **CSS3** com variáveis para os temas claro e escuro e media queries para a responsividade
- **JavaScript** puro para as validações, a manipulação do DOM e a sessão
- **Bootstrap 5.3.8**, usado somente no carrossel da página inicial
- **API ViaCEP**, para preencher o endereço a partir do CEP
- **localStorage**, para persistência somente no navegador; o projeto não possui backend nem banco de dados

## Como testar

Pelo site publicado, siga este roteiro:

1. Abra **Cadastro** e preencha o formulário. Exemplos de dados válidos:
   - Nome: `Joao da Silva Santos`
   - CPF: `529.982.247-25`
   - CEP: `01001-000` (rua, bairro, cidade e UF são preenchidos sozinhos)
   - Telefone fixo: `(+55)21-33334444`
   - Celular: `(+55)21-99998888`
   - Login: `barber` (6 letras)
   - Senha: `navalhas` (8 letras)
2. Entre pela tela de **Login** com o login e a senha cadastrados.
3. No **Painel**, o nome do usuário aparece no canto superior direito.
4. Envie o **Feedback** e confira os dados na tela **Meus dados**.
5. Clique em **Sair** e tente abrir `painel.html` de novo: o sistema mostra a página de acesso restrito.
6. Teste os botões **A+ / A-** e o tema claro/escuro na barra de acessibilidade.

Para rodar localmente, basta abrir o `index.html` com a extensão **Live Server** do VS Code. A consulta de CEP precisa de internet.

## Funcionalidades

### Fluxo público

| Tela | Arquivo | O que faz |
|---|---|---|
| Página inicial | `index.html` | Apresentação da barbearia, carrossel e catálogo, com menu e submenu de categorias |
| Serviços | `servicos.html` | Lista de serviços com descrição e preço |
| Produtos | `produtos.html` | Lista de produtos com descrição e preço |
| Cadastro | `cadastro.html` | Formulário completo de novo cliente |
| Login | `login.html` | Acesso com login e senha |
| Erro | `404.html` | Página de erro de navegação e de acesso sem login |

### Área do cliente (só abre com login)

| Tela | Arquivo | O que faz |
|---|---|---|
| Painel | `painel.html` | Nome do usuário, atalhos, agendamento atual e opção de cancelamento |
| Feedback | `feedback.html` | Formulário com `select`, `radio`, `checkbox` e `range` |
| Meus dados | `meus-dados.html` | Confirmação com os dados enviados no feedback |
| Horários | `horarios.html` | Agendamento de horário (funcionalidade extra) |

## Validações do cadastro

O formulário só é salvo quando todas as regras abaixo são cumpridas. Os erros aparecem abaixo de cada campo, sem usar `window.alert()`.

| Campo | Regra |
|---|---|
| Nome completo | De 15 a 80 caracteres, apenas letras |
| CPF | Cálculo real dos dois dígitos verificadores |
| CEP | Consulta à API ViaCEP e preenchimento automático de rua, bairro, cidade e UF |
| Telefone fixo e celular | Máscara exata `(+55)XX-XXXXXXXX` |
| Número e e-mail | Obrigatórios; o e-mail precisa ter formato válido |
| Login | Exatamente 6 letras |
| Senha | Exatamente 8 letras |
| Confirmação | Igual à senha |

## Armazenamento (localStorage)

Os dados são guardados no navegador em formato JSON (`JSON.stringify` para salvar e `JSON.parse` para ler):

| Chave | Conteúdo |
|---|---|
| `navalha_usuario` | Dados do cadastro |
| `navalha_sessao` | Usuário logado (nome e login) |
| `navalha_feedback` | Respostas do feedback vinculadas ao login |
| `navalha_agendamento` | Horário agendado |
| `navalha_tema` e `navalha_fonte` | Preferências de acessibilidade |

No login, o sistema compara o que foi digitado com o cadastro salvo. Enquanto existir uma sessão, o nome do usuário aparece no topo de todas as páginas. O botão **Sair** apaga a sessão.

## Acessibilidade e responsividade

- **Tema claro e escuro**, com a escolha salva no navegador
- **Botões A+ e A-**, que aumentam ou diminuem a fonte do conteúdo de 80% até 150%
- Foco visível para navegação pelo teclado e textos alternativos nas imagens
- Layout testado em **celular (375px)**, **tablet (768px)** e **desktop (1024px)**, com menu hambúrguer nas telas pequenas

## Identidade visual

| Cor | Tema escuro | Tema claro |
|---|---|---|
| Fundo | `#171513` | `#f7f4ee` |
| Texto | `#f0ebf4` | `#1a1714` |
| Destaque (dourado) | `#d7a84b` | `#805400` |

Tipografia: **Arial**, uma fonte do sistema, de leitura fácil e carregamento rápido.

## Estrutura de pastas

```text
projeto-barbearia/
├── 404.html
├── cadastro.html
├── feedback.html
├── horarios.html
├── index.html
├── login.html
├── meus-dados.html
├── painel.html
├── produtos.html
├── servicos.html
├── assets/
│   ├── bancada-barbearia.png
│   ├── corte-barbearia.png
│   ├── fundo-horario.jpg
│   ├── fundo-horario1.jpg
│   ├── fundo-horario2.jpg
│   ├── hero-barbearia.jpg
│   └── icone-site.png
├── css/
│   ├── estilo.css
│   ├── inicio.css
│   └── menu-hamburguer.css
├── favicon/
│   └── favicon.ico
├── js/
│   ├── cadastro.js
│   ├── comum.js
│   ├── dados.js
│   ├── feedback.js
│   ├── horarios.js
│   ├── inicio.js
│   ├── login.js
│   ├── painel.js
│   └── meus-dados.js
└── output/
    └── pdf/
        └── pre-projeto-navalha-de-ouro.pdf
```

Os estilos ficam em `css/`; os scripts em `js/`; imagens e ícones em `assets/` e `favicon/`. O projeto é estático e front-end: não há servidor, backend ou banco de dados.

## Observação de segurança

Como o projeto é só Front-End, a senha fica salva no `localStorage` sem criptografia, apenas para simular o sistema. Em um sistema real, o login e as senhas seriam tratados por um servidor com criptografia.
