import { Wallet } from "ethers";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import inquirer from "inquirer";

const MOCK_BALANCE = "10000.0 ETH (saldo simulado, apenas para testes locais)";

export default async function generateAccounts() {
  const arg = Number(process.argv[2]);
  const count = Number.isInteger(arg) && arg > 0 ? arg : 10;

  console.log(chalk.yellow("⚠ AVISO IMPORTANTE"));
  console.log(
    chalk.yellow(
      "  Estas chaves são geradas localmente para testes e desenvolvimento."
    )
  );
  console.log(
    chalk.yellow(
      "  NUNCA envie fundos reais para esses endereços nem use essas chaves em produção."
    )
  );
  console.log("");

  const accounts = [];

  for (let i = 0; i < count; i++) {
    const wallet = Wallet.createRandom();
    accounts.push({
      index: i,
      address: wallet.address,
      privateKey: wallet.privateKey,
      mnemonic: wallet.mnemonic?.phrase || null,
    });
  }

  console.log(chalk.cyan(`Contas geradas (${count}):`));
  console.log("");

  accounts.forEach((acc) => {
    console.log(chalk.gray(`Conta #${acc.index}`));
    console.log(`  ${chalk.green("Address:")}     ${acc.address}`);
    console.log(`  ${chalk.magenta("Private Key:")} ${acc.privateKey}`);
    console.log(`  ${chalk.gray("Balance:")}      ${MOCK_BALANCE}`);
    console.log("");
  });

  const { save } = await inquirer.prompt([
    {
      type: "confirm",
      name: "save",
      message: "Salvar essas contas em um arquivo .json local?",
      default: false,
    },
  ]);

  if (save) {
    const filePath = path.join(process.cwd(), "gbit-accounts.json");
    fs.writeFileSync(
      filePath,
      JSON.stringify(
        accounts.map(({ index, address, privateKey }) => ({
          index,
          address,
          privateKey,
        })),
        null,
        2
      ),
      "utf-8"
    );

    console.log("");
    console.log(chalk.green(`✔ Salvo em: ${filePath}`));
    console.log(
      chalk.red(
        "  ⚠ Este arquivo contém chaves privadas em texto puro. NÃO faça commit dele em nenhum repositório."
      )
    );

    // Sugere adicionar ao .gitignore automaticamente, se existir
    const gitignorePath = path.join(process.cwd(), ".gitignore");
    if (fs.existsSync(gitignorePath)) {
      const content = fs.readFileSync(gitignorePath, "utf-8");
      if (!content.includes("gbit-accounts.json")) {
        fs.appendFileSync(gitignorePath, "\ngbit-accounts.json\n");
        console.log(chalk.gray("  (adicionado ao .gitignore automaticamente)"));
      }
    }
  }

  console.log("");
}
