import {sticker} from '../lib/sticker.js';

const handler = async (m, { conn}) => {

const url = 'https://telegra.ph/file/5b33b90624086f90b7a55.jpg'

const stiker = await sticker(null, url, global.packname, global.author)

conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);

}
handler.customPrefix = /porno|Porno|🥵/i;
handler.command = new RegExp;
export default handler