# Rastreabilidade dos requisitos - Navalha de Ouro

Fonte analisada: **Projeto de Desenvolvimento Front-End - UNISUAM**, professor Bruno Cezario, 3 páginas.

A coluna **Situação anterior** descreve o repositório `johnnyolima/projeto-barbearia` antes desta revisão.

| Exigência do professor | Situação anterior | Arquivo relacionado | Alteração necessária/realizada | Status final |
|---|---|---|---|---|
| Projeto exclusivamente Front-End | Atendido | Todo o projeto | Mantido HTML, CSS e JavaScript puro | Concluído |
| Dados simulados no `localStorage` | Não atendido | `js/dados.js` | Criadas funções de salvar/ler usuário, sessão e feedback em JSON | Concluído |
| Landing Page com apresentação | Parcial | `index.html` | Preservada a ideia visual e ampliada a apresentação | Concluído |
| Catálogo de produtos/serviços com descrições | Parcial | `index.html`, `servicos.html`, `produtos.html` | Catálogo passou a ser estático no HTML para reduzir JavaScript | Concluído |
| Menu com submenus para categorias | Não atendido | Páginas públicas | Criado submenu nativo com `details`/`summary` para Serviços e Produtos | Concluído |
| Cadastro de usuário | Não atendido | `cadastro.html`, `js/cadastro.js` | Criado formulário completo | Concluído |
| Login com login e senha | Apenas demonstração, sem cadastro real | `login.html`, `js/login.js` | Login passou a comparar os dados salvos no navegador | Concluído |
| Página personalizada de erro 404/Auth | Não atendido | `404.html`, `js/comum.js` | Criada página 404 e mensagem específica para acesso sem sessão | Concluído |
| Dashboard/Perfil | Não atendido | `painel.html` | Criado painel restrito | Concluído |
| Nome do usuário no canto superior e Logout | Não atendido | Páginas restritas, `js/comum.js` | Sessão exibe nome e habilita botão Sair | Concluído |
| Feedback com range, select, radio e checkbox | Não atendido | `feedback.html`, `js/feedback.js` | Criado formulário com todos os tipos pedidos | Concluído |
| Visualização dos dados enviados | Não atendido | `meus-dados.html`, `js/meus-dados.js` | Criada página de confirmação | Concluído |
| Nome: 15 a 80 caracteres, apenas letras | Não atendido | `js/cadastro.js` | Validação em JavaScript | Concluído |
| CPF com dígito verificador | Não atendido | `js/dados.js`, `js/cadastro.js` | Implementado algoritmo dos dois dígitos | Concluído |
| CEP com API e autopreenchimento | Não atendido | `js/cadastro.js` | Integração com ViaCEP e preenchimento de rua, bairro, cidade e UF | Concluído |
| Telefone fixo no formato `(+55)XX-XXXXXXXX` | Não atendido | `js/dados.js`, `js/cadastro.js` | Criada máscara e validação | Concluído |
| Celular no formato `(+55)XX-XXXXXXXX` | Não atendido | `js/dados.js`, `js/cadastro.js` | Criada máscara e validação | Concluído |
| Login com exatamente 6 letras | Não atendido | `js/cadastro.js` | Validação por expressão regular | Concluído |
| Senha com exatamente 8 letras | Não atendido | `js/cadastro.js` | Validação por expressão regular | Concluído |
| Confirmação idêntica à senha | Não atendido | `js/cadastro.js` | Comparação entre senha e confirmação | Concluído |
| Cadastro salvo como objeto JSON | Não atendido | `js/dados.js` | Uso de `JSON.stringify()` e `JSON.parse()` | Concluído |
| Login valida dados do cadastro | Não atendido | `js/login.js` | Comparação com objeto salvo no `localStorage` | Concluído |
| Estado de login persiste nas telas internas | Não atendido | `js/comum.js` | Sessão em `localStorage` e nome no cabeçalho | Concluído |
| Proibido usar `window.alert()` | Atendido no código anterior | Todo o projeto | Mantidos feedbacks visuais em elementos da página | Concluído |
| Responsivo em 375px+, 768px+ e 1024px+ | Parcial | `css/estilo.css` | CSS consolidado e breakpoints em 768px e 1024px, com base mobile | Concluído |
| Menu intuitivo e Logout após login | Parcial | HTML + `js/comum.js` | Cabeçalho unificado e Logout disponível com sessão | Concluído |
| Acessibilidade: tema claro/escuro | Não atendido | `css/estilo.css`, `js/comum.js` | Alternância de tema salva no navegador | Concluído - desafio Plus |
| Acessibilidade: A+ / A- | Não atendido | `css/estilo.css`, `js/comum.js` | Escala de fonte do conteúdo com preferência salva | Concluído - desafio Plus |
| HTML5 semântico e CSS3 | Parcial | HTML/CSS | Mantidas tags semânticas e CSS consolidado | Concluído |
| JavaScript: validações, DOM e API | Muito básico | Arquivos `js/` | Implementado apenas o necessário ao enunciado | Concluído |
| README explicativo e repositório organizado | Parcial | `README.md` | README atualizado e duplicação de CSS/JS removida | Concluído |
| Documento PDF com wireframes, fluxo, paleta e tipografia | Ausente no repositório | `materiais/guia-estudo-navalha-de-ouro.pdf` | Incluído no guia de estudo | Concluído no PDF |
| Design de alta fidelidade no Figma | Não localizado | Link externo | A equipe precisa criar/fornecer o link do Figma | **Pendente externo** |
| Site publicado por URL | Estado dependente da configuração do GitHub Pages | GitHub Pages | Código preparado com caminhos relativos e `404.html`; a tentativa de escrita pela integração GitHub retornou HTTP 403 | **Pendente de permissão/publicação** |
| Enviar links no AVA | Não é uma tarefa do código | AVA | A equipe deve enviar o link do GitHub e do site | **Pendente externo** |

## Arquivos removidos por simplificação

Os arquivos `css/home.css`, `css/login.css`, `css/produtos.css`, `css/servicos.css`, `js/home.js`, `js/produtos.js` e `js/servicos.js` foram substituídos por uma estrutura mais simples. O CSS repetido passou para `css/estilo.css`, e produtos/serviços passaram a ficar diretamente no HTML, evitando JavaScript desnecessário.
