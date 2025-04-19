import {sticker} from '../lib/sticker.js';

const handler = async (m, { conn}) => {

const url = 'https://telegra.ph/file/f98982da1ed4ee3cc8e20.jpg'

const stiker = await sticker(null, url, global.packname, global.author)

conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);

}
handler.customPrefix = /😍|🥰/i;
handler.command = new RegExp;
export default handler