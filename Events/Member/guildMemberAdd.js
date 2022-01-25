const { MessageEmbed, WebhookClient, GuildMember} = require("discord.js");

module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member
     */
    execute(member) {
        const {user, guild} = member;


      
        const Welcomer = new WebhookClient({
            id: "924238105219854337",
            token: "1xQ3zxm3GdVhqBQT1l5JwHCiRjZrZfqbLuRh4f2EPTAXXKi4nQ2UmV7GS3D7Bl38Uadi"
        });


        
        const Welcome = new MessageEmbed()
        .setColor("AQUA")
        .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 512}))
        .setThumbnail(user.avatarURL({dynamic: true, size: 512}))
        .setDescription(`
        Vítej${member} na komunitním serveru s názvem **${guild.name}**!\n
        Účet byl vytvořen: <t:${parseInt(user.createdTimestamp / 1000)}:R>\nNejnovější počet členů: **${guild.memberCount}**`)
        .setFooter(`ID: ${user.id}`)

        Welcomer.send({embeds: [Welcome]});
    }
}