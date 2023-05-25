#!/usr/bin/env node
import { runCli } from './cli'
import { logger } from './utils/logger'
import { renderTitle } from './utils/renderTitle'

// the terminal will show the below message
// Welcome to the vscode-debug-code!
// then it will give you a choice
// Which debug template do you want to generate? (Use arrow keys)
// you can only choose Node.js
// then it will generate a file .vscode/settings.json
async function main() {
  renderTitle()
  runCli()
}

main().catch((err) => {
  logger.error('Aborting installation...')
  if (err instanceof Error) {
    logger.error(err)
  }
  else {
    logger.error(
      'An unknown error has occurred. Please open an issue on github with the below:',
    )
    console.log(err)
  }
  process.exit(1)
})
