let handler = async (m, { conn,usedPrefix }) => {
    conn.fakeReply(m.chat, `ABDγ€NICKγ€ε΅`,
'0@s.whatsapp.net',
'πΏππ¨π­-π§ππ§π§π¨π'
.trim()) 
}
handler.command = /^(nick)$/i
handler.private = false
handler.group = true

module.exports = handler
