import { Bot } from 'grammy';
import { BOT_TOKEN } from './config/config.ts';


export const bot = new Bot(BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('Бот запущен');
});

bot.on("message", (ctx) => {
  ctx.reply('Я пока не понимаю, что вы пишете!');
})

// ВАЖНО: polling ТОЛЬКО для локального запуска
bot.start();
