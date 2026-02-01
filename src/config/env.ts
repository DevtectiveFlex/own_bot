export const NODE_ENV = process.env.NODE_ENV ?? 'development';

export const isDev = NODE_ENV === 'development';
export const isProd = NODE_ENV === 'production';

export const BOT_TOKEN = process.env.BOT_TOKEN || "";

if (!BOT_TOKEN || BOT_TOKEN === "") {
  throw new Error('BOT_TOKEN is not defined');
}
