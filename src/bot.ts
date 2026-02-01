import { Bot } from 'grammy';
import { BOT_TOKEN, isDev } from './config/env.js';


export const bot = new Bot(BOT_TOKEN);

bot.command('start', (ctx) => {
  ctx.reply('Бот запущен');
});

bot.on("message", (ctx) => {
  ctx.reply('Здесь должна быть обработка сообщения');
})

if (isDev) {
  bot.start();
}
