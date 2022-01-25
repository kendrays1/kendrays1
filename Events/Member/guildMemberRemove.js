const { MessageEmbed, WebhookClient, GuildMember} = require("discord.js");

module.exports = {
    name: "guildMemberRemove",
    /**
     * 
     * @param {GuildMember} member
     */
    execute(member) {
        const {user, guild} = member;

        const Loger = new WebhookClient({
            id: "924238314121359391",
            token: "QLG-X6aVVBS82LakoUWoPZQt0i9VnGLl-Kk0aWBNzScP09J1myPIQMgiu-O2Yo3gxvQt"
        });



        
        const Welcome = new MessageEmbed()
        .setColor("RED")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        ${member} se odpojil z komunity\n
        Joined: <t:${parseInt(member.joinedTimestamp/ 1000)}:R>\nNejnovější počet členů: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Loger.send({embeds: [Welcome]})
    }
}