const {Client,  MessageEmbed, CommandInteraction } = require("discord.js");

module.exports = {
    name: "interactionCreate",
    /**
     * 
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        if (client.maintenance && interaction.user.id != "637738210948153374") {
            const Response = new MessageEmbed()
            .setTitle(":man_construction_worker: MAINTENANCE :man_construction_worker:")
            .setDescription("Je nám líto, robot se brzy vrátí, až vše bude fungovat správně.")
            .setColor("DARK_BUT_NOT_BLACK")

            return interaction.reply({embeds: [Response]})
        }
        if(interaction.isCommand() || interaction.isContextMenu) {
            const command = client.commands.get(interaction.commandName);
            if(!command) return interaction.reply({embeds: [
                new MessageEmbed()
                .setColor("RED")
                .setDescription("⛔ Při spouštění tohoto příkazu došlo k chybě.")
            ]}) && client.commands.delete(interaction.commandName);
            command.execute(interaction, client);
        }
    }
}