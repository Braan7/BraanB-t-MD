let handler = async (m, { conn, text, isROwner, isOwner }) => {
    if (text) {
        global.db.data.chats[m.chat].setpredial = text
        conn.reply(m.chat, '𝙇𝙖𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚𝙡 𝙥𝙧𝙚𝙙𝙞𝙖𝙡 𝙝𝙖𝙣 𝙨𝙞𝙙𝙤 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙙𝙖𝙨.', m)
    } else throw `𝙀𝙨𝙘𝙧𝙞𝙗𝙚 𝙡𝙖𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚𝙡 𝙥𝙧𝙚𝙙𝙞𝙖𝙡, 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:
.𝙨𝙚𝙩𝙥𝙧𝙚𝙙𝙞𝙖𝙡 𝙋𝙧𝙚𝙙𝙞𝙖𝙡: 𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤@𝙬𝙝𝙖𝙩𝙨𝙖𝙥𝙥.𝙘𝙤𝙢`
}

handler.command = ['setpredial']
handler.admin = true
handler.group = true
export default handler
