
// Código Hecho Por Braan7
let handler = async (m, { conn }) => {
    // React con un emoji al mensaje
    await m.react('⭐');

    // Mensaje que se enviará
    const message = `
𝐁𝐎𝐓 𝐏𝐀𝐑𝐀 𝐆𝐑𝐔𝐏𝐎𝐒

> 𝙼𝙴𝙽𝚂𝚄𝙰𝙻
* 🧡 Un Grupo $35Mx
* 🧡 3 Grupos $80Mx
> 𝙿𝙴𝚁𝙼𝙰𝙽𝙴𝙽𝚃𝙴
* 🤖 Un Grupo $55Mx
* 🤖 3 Grupos $120Mx

> Contacto: +52 56 4880 4810 

> Creador de Bots:
+52 56 4880 4810 
+52 56 4852 7333`;

    if (m.isGroup) {
        // URL de la imagen
        const imageUrl = 'https://qu.ax/vBjJa.jpg'; // Cambia esta URL por la de la imagen que deseas enviar

        // Envía la imagen con el mensaje
        await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: message }, { mimetype: 'image/jpeg' });
    }
}

handler.help = ['precios2'];
handler.tags = ['main'];
handler.group = true;
handler.command = ['precios2', 'p2'];

export default handler;