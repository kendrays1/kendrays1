const { CommandInteraction, MessageEmbed, WebhookClient } = require("discord.js");

module.exports = {
    name: "announce",
    description: "Oznámí vše, co chcete oznámit v oznamovacím kanálu.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "title",
            description: "Provide the title of what you want to announce.",
            type: "STRING",
            required: true
        },
        {
            name: "information",
            description: "Provide the information that you want to announce.",
            type: "STRING",
            required: true
        },
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        
        interaction.reply({content: "Sending announcement..."})

        const announcer = new WebhookClient({
            url : "https://discord.com/api/webhooks/924245485756231711/_z-UlzpdIMvbN1-K_X6u30D8OQVZhzr6H7_CW9jJqeZqh7nPt2uAA0TuQXQEjhrVYHYZ"
        })

        const title = interaction.options.getString("title");
        const info = interaction.options.getString("information");

        const announcement = new MessageEmbed()
        .setTitle(`${title} `)
        .setColor("GREEN")
        .setDescription(`${info}`)
        .setTimestamp()

        announcer.send({embeds: [announcement]})

    }
}