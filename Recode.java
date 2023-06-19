Nev.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await Nev.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                welcome = `
┌─❖\n│「 𝗛𝗶 👋 」
└┬❖ 「 @${num.split("@")[0]}  」
   │❒  *Intro*
   │❒  *Nama* : 
   │❒  *Umur* :
   │❒  *Askot* : 
  └───────────────┈ ⳹`
  
                // Get Profile Picture User
                try {
                    ppuser = await Nev.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://tinyurl.com/yx93l6da'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await Nev.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }
                if (anu.action == 'add') {
                	Nev.sendMessage(anu.id, {
text: `${welcome}`,
contextInfo: {
	mentions: [num], 
externalAdReply: {
title: `𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 ${metadata.subject}\n©ᴄʀᴇᴀᴛᴇᴅ ʙʏ ɴᴇᴠᴢ`,
body: `WELCOME`,
thumbnailUrl: ppuser,
sourceUrl: "wa.me/6285879466965?text=Hi",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}},)
} else if (anu.action == 'promote') {
                    Nev.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Promote From ${metadata.subject}` })
                } 
            }
        } catch (err) {
            console.log(err)
        }
    })
