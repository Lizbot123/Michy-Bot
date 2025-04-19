import {sticker} from '../lib/sticker.js';

const handler = async (m, { conn}) => {

const url = 'https://telegra.ph/file/df0fb7bdd4bafd7a7f962.mp4'

const stiker = await sticker(null, url, global.packname, global.author)

conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);

}
handler.customPrefix = /jajaja|🤣|😂/i;
handler.command = new RegExp;
export default handler