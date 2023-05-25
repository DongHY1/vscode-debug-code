import { cac } from 'cac'
import inquirer from 'inquirer'
import { logger } from '../utils/logger'

export async function runCli() {
  const cli = cac()
  cli.name = 'A CLI for creating vscode debug code file'
  try {
    await promptLanguage()
  }
  catch (error) {
    logger.info('Exiting...')
    process.exit(0)
  }
}

async function promptLanguage(): Promise<void> {
  const { language } = await inquirer.prompt<{ language: string }>({
    name: 'language',
    type: 'list',
    message: 'What kind of debug mode do you want to choice?',
    choices: [
      { name: 'JavaScript', value: 'JavaScript', short: 'JavaScript' },
      { name: 'TypeScript', value: 'TypeScript', short: 'TypeScript' },
      { name: 'React', value: 'React', short: 'React' },
    ],
    default: 'JavaScript',
  })

  logger.success(`Good choice! will generate ${language} debug template !`)
}
