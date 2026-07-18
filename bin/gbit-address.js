#!/usr/bin/env node

import banner from "../lib/banner.js";
import generateAccounts from "../lib/generate.js";

async function main() {
  banner();
  await generateAccounts();
}

main();