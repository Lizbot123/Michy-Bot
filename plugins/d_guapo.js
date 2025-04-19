import {sticker} from '../lib/sticker.js';

const handler = async (m, { conn}) => {

const url = 'https://telegra.ph/file/f9b10b58ce2ad96b29517.jpg'

const stiker = await sticker(null, url, global.packname, global.author)

conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);

}
handler.customPrefix = /guapo|Guapo|hermosa/i;
handler.command = new RegExp;
export default handler