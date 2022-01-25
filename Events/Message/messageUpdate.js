const { MessageEmbed, Message, WebhookClient, Webhook } = require ("discord.js");

module.exports = {
    name: "messageUpdate",
    /**
     * 
     * @param {Message} oldMessage
     * @param {Message} newMessage 
     */
    execute(oldMessage, newMessage) {
        if(oldMessage.author.bot) return;

        if(oldMessage.content === newMessage.content) return;

        const Count = 1950;

        const Original = oldMessage.content.slice(0, Count) + (oldMessage.content.length > 1950 ? "..." : "");
        const Edited = newMessage.content.slice(0, Count) + (newMessage.content.length > 1950 ? "..." : "");

        const Log = new MessageEmbed()
        .setColor("#36393f")
        .setDescription(`📘 [zpráva](${newMessage.url}) by ${newMessage.author} byla **upravena** v ${newMessage.channel}.\n 
        **Original**:\n ${Original } \n**Upravený**:\n ${Edited}`)
        .setFooter(`Member: ${newMessage.author.tag} | ID: ${newMessage.author.id}`);

        new WebhookClient({url: "https://discord.com/api/webhooks/924420734275698728/NLPSVRkwdDEv8SIX5Iq6EJ6KY5jbSBE6674O6zgjmzW2RPThKa2cHcFGIO9Wrw0GV9jH"}
        ).send({embeds: [Log]}).catch((err) => console.log(err));
        
    }
}