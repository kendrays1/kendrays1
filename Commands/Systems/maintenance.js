const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "maintenance",
    description: "Only for bot owner.",
    permission: "ADMINISTRATOR",
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    execute(interaction, client) {



        if (client.maintenance === false && interaction.user.id == "918184223557423146") {
            
            client.maintenance = true;
            
            const bot = new MessageEmbed()
                .setColor("GREEN")
                .setTitle("Údržbový mód **ZAPNUT** ✅")
                .setDescription(`👷‍♂️ Robot byl uveden do režimu údržby. 👷‍♂️`)
                .setTimestamp()
                
            return interaction.reply({ embeds: [bot], fetchReply: true })//.then(msg => { setTimeout(() => msg.delete(), 5000) })

        }

        if (client.maintenance && interaction.user.id == "918184223557423146"){
            
            client.maintenance = false;

            const bot = new MessageEmbed()
                .setColor("GREEN")
                .setTitle("Údržbový mód **VYPNUT** ⛔")
                .setDescription(`👷‍♂️ Robot byl vyřazen z režimu údržby. 👷‍♂️`)
                .setTimestamp()

            return interaction.reply({ embeds: [bot], fetchReply: true })//.then(msg => { setTimeout(() => msg.delete(), 5000) })

        }
        
        
        interaction.reply({ content: "Nic nebude máš smolíka.", fetchReply: true }).then(msg => { setTimeout(() => msg.delete(), 5000) })
        
    }
}