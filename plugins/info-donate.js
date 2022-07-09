let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
conn.sendHydrated(m.chat, 
`*––––––『 DONATE 』––––––*`, 
Donate owner
Gopay
Dana

💱 ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ᴩᴀʏ :
⮕ Gopay
★ ᴄʟɪᴄᴋ ᴏɴ ᴩᴀʏᴩᴀʟ ʟɪɴᴋ ᴛᴏ ᴍᴀᴋᴇ ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ᴛʀᴀɴsᴀᴄᴛɪᴏɴ.`, './media/donate.jpg', 'https://www.paypal.me/DineshValor', 'PᴀʏPᴀʟ', null, null, [[`ᴍᴇɴᴜ`, `${usedPrefix}menu`]], m, {asLocation: true})
}
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler