const {MessageEmbed, Message, WebhookClient } = require("discord.js");

module.exports = {
    name: "messageDelete",
    /**
     * @param {Message} message
     */
    execute(message) {
        if(message.author.bot) return;
         
        const Log = new MessageEmbed()
        .setColor("#36393f")
        .setDescription(`🚨 [zpráva](${message.url}) by ${message.author.tag} byla **smazána**.\n
        **Smazaná Zpráva:**\n ${message.content ? message.content : "None"}`.slice(0, 4096))

        if(message.attachments.size >= 1){
            Log.addField(`Attachments:`, `${message.attachments.map(a => a.url)}`, true)
        }

        new WebhookClient({url: "https://discord.com/api/webhooks/924420328892018698/1ukO8oFHD4nXmdT1YXjMzWvpHPD2jqrFKyvV5qSTP-HcIGEnlLh2pUQODdXVx4NMFary"}
        ).send({embeds: [Log]}).catch((err) => { console.log(err)});

    }
}