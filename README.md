<img width="1672" height="941" alt="image" src="https://github.com/user-attachments/assets/9c57cfcb-31ef-4aa1-bed8-4cd0de27fe81" />



<div align="center">



![version](https://img.shields.io/badge/VERSION-1.0.0-0078D4?style=for-the-badge)
![node](https://img.shields.io/badge/NODE.JS-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![license](https://img.shields.io/badge/LICENSE-MIT-4CAF50?style=for-the-badge)

# 🔑 gbit-address

**Gera pares de chaves (endereço + chave privada) para testes locais de desenvolvimento Web3.**

Igual às contas que o `npx hardhat node` mostra ao subir uma rede local — só que sob demanda, em qualquer terminal, sem precisar de um projeto Hardhat rodando.

📦 [Pacote no NPM](https://www.npmjs.com/package/cli-gbit-address) · 💻 [Repositório no GitHub](https://github.com/Gislaine-programadora)

</div>

---

## ⚠️ Aviso importante

As chaves geradas por esse CLI são para **testes e desenvolvimento local**. Elas aparecem em texto puro no terminal (e, se você optar por salvar, também em arquivo).

**Nunca envie fundos reais para esses endereços, e nunca use essas chaves em produção ou em redes mainnet.** Uma chave que já foi exibida em tela ou salva em arquivo não deve ser considerada segura para guardar valor real.

## 🚀 Uso

```bash
npx gbit-address
```

Por padrão, gera **10 contas**. Para gerar uma quantidade diferente:

```bash
npx gbit-address 20
```

## ✨ O que cada conta mostra

```
Conta #0
  Address:     0x1234...
  Private Key: 0xabcd...
  Balance:      10000.0 ETH (saldo simulado, apenas para testes locais)
```

- **Address** e **Private Key** são gerados com [ethers.js](https://docs.ethers.org/), a mesma biblioteca usada por ferramentas como Hardhat e MetaMask — criptograficamente seguros e aleatórios.
- **Balance** é apenas ilustrativo (não existe rede de verdade por trás), útil para simular contas de teste em interfaces e scripts.

## 💾 Salvando em arquivo

Ao final, o CLI pergunta se você quer salvar as contas em `gbit-accounts.json`. Se você confirmar:

- O arquivo é criado na pasta atual
- Se existir um `.gitignore` no projeto, o CLI **adiciona `gbit-accounts.json` automaticamente**, evitando que chaves privadas sejam enviadas sem querer para um repositório público

## 📦 Instalação

```bash
npx gbit-address
```

Ou, se preferir instalar globalmente:

```bash
npm install -g gbit-address
gbit-address
```

## 🛠️ Tecnologias

- Node.js
- [ethers.js](https://www.npmjs.com/package/ethers) — geração das chaves
- [chalk](https://www.npmjs.com/package/chalk) — cores no terminal
- [inquirer](https://www.npmjs.com/package/inquirer) — confirmação para salvar em arquivo
- [figlet](https://www.npmjs.com/package/figlet) + [gradient-string](https://www.npmjs.com/package/gradient-string) — logo ASCII colorido

## 🗺️ Roadmap

- [ ] Opção de gerar contas a partir de uma mnemônica (seed phrase) específica
- [ ] Suporte a outras redes além de EVM (ex: Solana)
- [ ] Flag `--quiet` para gerar sem prints, direto para arquivo

## 🤝 Ecossistema Gbit

| Ferramenta | Descrição |
|---|---|
| [`gbit-next`](https://github.com/Gislaine-programadora) | Cria projetos Next.js prontos, com templates completos |
| [`gbit-start`](https://github.com/Gislaine-programadora) | Abre ou clona qualquer projeto existente e o deixa rodando |
| [`gbit-readme`](https://github.com/Gislaine-programadora) | Gera README profissional automaticamente |
| [`gbit-address`](https://github.com/Gislaine-programadora) | Este CLI — gera pares de chaves para testes Web3 |
| [`create-gbit-app`](https://github.com/Gislaine-programadora) | Projetos fullstack completos (Backend + Frontend Vite/TS + Smart Contracts) |

## 📄 Licença

MIT © [Gislaine Cristina Lopes Fernandes](https://github.com/Gislaine-programadora)