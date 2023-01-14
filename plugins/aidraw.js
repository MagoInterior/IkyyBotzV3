import axios from "axios"
import fetch from "node-fetch"

let handler = async (m, {command, text, conn}) => {

if (command == 'aidraw') {
let haha = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${text}`)
conn.sendButton(m.chat, `*${text}*`.trim(), author, haha.data, [[' All Menu ', `.menu`]], m)}
}

handler.command = handler.help = ['aidraw']
handler.tags = ['internet', 'tools']
handler.limit = true
handler.premium = true
export default handler