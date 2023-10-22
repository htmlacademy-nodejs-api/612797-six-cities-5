import { Command } from './command.interface.js';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    console.info(`
        Программа для подготовки данных для REST API сервера.
        Пример:
            cli.js --<command> [--arguments]
        Команды:
            --version:                   # выводит номер версии консольного приложения
            --help:                      # печатает текст справки
            --import <path>:             # импортирует моковые данные из TSV файла по адресу path
    `);
  }
}
