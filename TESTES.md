# Testes realizados - Navalha de Ouro

Data da revisão: 25/08/2026.

Este arquivo registra somente testes que foram realmente executados. Itens não testados no ambiente publicado permanecem identificados como pendentes.

## Testes automatizados de lógica

Foram executados testes em Node.js com simulações de `localStorage`, DOM e resposta da ViaCEP.

**Resultado: 17 de 17 testes aprovados.**

- CPF válido aceito;
- CPF inválido recusado;
- máscara de CPF;
- máscara de CEP;
- máscara de telefone;
- gravação e leitura do usuário em JSON;
- gravação e encerramento de sessão;
- gravação e leitura de feedback;
- preenchimento do endereço a partir da resposta da ViaCEP;
- cadastro válido salva o usuário;
- login correto cria sessão;
- login incorreto exibe mensagem visual;
- página restrita sem sessão redireciona para `404.html?tipo=auth`;
- tema salva preferência;
- A+ salva escala de fonte;
- `range` atualiza o valor exibido;
- feedback é salvo e direciona para a página de confirmação.

## Verificações estáticas

- 6 de 6 arquivos JavaScript aprovados por `node --check`;
- nenhum `href` ou `src` local aponta para arquivo inexistente;
- nenhum `window.alert()` é utilizado pelo código do projeto;
- CSS possui abordagem mobile first e breakpoints em 768 px e 1024 px;
- `index.html` está na raiz e todos os caminhos são relativos, adequados ao GitHub Pages em subdiretório.

## API ViaCEP

O endpoint público `https://viacep.com.br/ws/01001000/json/` foi consultado durante a revisão e respondeu com dados de endereço, incluindo Praça da Sé, São Paulo/SP. O código do projeto usa o mesmo padrão de URL.

## PDF de estudo

- PDF gerado com 49 páginas na versão anterior e revisado novamente na entrega final;
- arquivo renderizado para inspeção de layout;
- não há JavaScript incorporado no PDF;
- o documento contém requisitos, estudo, divisão do grupo, roteiro, checklist, glossário e anexos de código.

## Pendências que exigem ambiente externo

- publicação efetiva no GitHub: tentativa de escrita pela integração retornou HTTP 403 `Resource not accessible by integration`;
- GitHub Pages: deve ser validado depois que a versão final estiver no repositório e Pages estiver configurado para `main` + `/(root)`;
- Figma de alta fidelidade: precisa ser criado pela equipe ou fornecido por uma conta Figma conectada;
- envio dos links no AVA: ação manual da equipe.
