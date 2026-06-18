# Cenário de Teste 2

Projeto de estudos com **Cypress** no site demo do [OrangeHRM](https://opensource-demo.orangehrmlive.com) — ambiente aberto pra praticar automação de testes no front-end.

## Pra rodar no seu PC

Precisa ter o [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).

```bash
git clone https://github.com/JonathaITZ/cenario-de-teste-2.git
cd cenario-de-teste-2
npm install
```

## Como executar

Quer ver o teste rodando na tela? Use:

```bash
npm run cy:open
```

Pra rodar tudo direto no terminal, sem abrir a interface:

```bash
npm run cy:run
```

## O que tem aqui dentro

```
cypress/
├── e2e/          # Os cenários de teste (.cy.js)
└── support/      # Configurações gerais e comandos que você for criando
```

Hoje o projeto cobre:

- **Login** — entrar no sistema com credenciais válidas
- **PIM / Personal Details** — cadastrar funcionário, salvar os dados e excluir no final (pra não deixar lixo no demo)

## Login do site demo

| Campo    | Valor     |
|----------|-----------|
| Usuário  | `Admin`   |
| Senha    | `admin123` |

Essas credenciais são públicas — o próprio site deixa visível na tela de login.
