# Cenario de Teste 2 - Cypress

Testes E2E com Cypress para o site demo [OrangeHRM](https://opensource-demo.orangehrmlive.com).

## Pré-requisitos

- [Node.js](https://nodejs.org/) (v18 ou superior)

## Instalação

```bash
git clone <url-do-repositorio>
cd cenario-de-teste-2
npm install
```

## Executar testes

```bash
# Modo interativo (Cypress Test Runner)
npm run cy:open

# Modo headless (terminal)
npm run cy:run
```

## Estrutura

```
cypress/
├── e2e/          # Cenários de teste
└── support/      # Configurações e comandos customizados
```

## Credenciais demo

- **Usuário:** Admin
- **Senha:** admin123
