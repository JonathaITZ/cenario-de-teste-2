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
├── e2e/
│   ├── exemplo.cy.js           # Login com credenciais válidas
│   ├── login-invalido.cy.js    # Login com erro e teste de segurança
│   └── personal-details.cy.js  # Cadastro e exclusão de funcionário
└── support/                    # Configurações gerais e comandos customizados
```

## Cenários de teste

### Login válido (`exemplo.cy.js`)
- Acessa a tela de login
- Entra com credenciais corretas
- Valida que saiu do login e chegou no Dashboard

### Login inválido (`login-invalido.cy.js`)
- Tenta entrar com senha errada
- Valida que permanece na tela de login
- Confirma a mensagem **Invalid credentials**
- Tenta acessar a home (`/dashboard`) direto pela URL, sem login
- Valida que o sistema redireciona para o login (proteção de rota)

### PIM / Personal Details (`personal-details.cy.js`)
- Cria um funcionário novo
- Salva os dados em Personal Details
- Busca na lista e exclui no final (limpeza do teste)

## Login do site demo

| Campo    | Valor      |
|----------|------------|
| Usuário  | `Admin`    |
| Senha    | `admin123` |

Essas credenciais são públicas — o próprio site deixa visível na tela de login.

## Repositório

https://github.com/JonathaITZ/cenario-de-teste-2
