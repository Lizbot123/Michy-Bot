import {sticker} from '../lib/sticker.js';

const handler = async (m, { conn}) => {

const url = 'https://telegra.ph/file/4bb3303be693a947da2f6.mp4'

const stiker = await sticker(null, url, global.packname, global.author)

conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);

}
handler.customPrefix = /🙄/i;
handler.command = new RegExp;
export default handler