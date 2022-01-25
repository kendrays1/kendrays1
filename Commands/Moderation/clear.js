const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: "clear",
    description: "Odstraní zadaný počet zpráv z kanálu nebo cíle.",
    permission: "MANAGE_MESSAGES",
    options: [
        {
            name: "cislo",
            description: "Vyberte množství zpráv, které chcete odstranit z kanálu nebo cíle.",
            type: "NUMBER",
            required: true
        },
        {
            name: "cil",
            description: "Vyberte cíl pro vymazání jejich zpráv.",
            type: "USER",
            required: false
        },
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const { channel, options } = interaction;

        const Amount = options.getNumber("cislo");
        const Target = options.getMember("cil");

        const Messages = await channel.messages.fetch();

        const Response = new MessageEmbed()
        .setColor("LUMINOUS_VIVID_PINK");
        if(Amount > 100 || Amount <= 0) {
            Response.setDescription(`Částka nesmí přesáhnout 100 a nesmí být nižší než 1.`)
            return interaction.reply({embeds: [Response]})
        }
        if(Target) { 
           let i = 0;
           const filtered = [];
           (await Messages).filter((m) => {
               if(m.author.id === Target.id && Amount > i) {
                   filtered.push(m);
                   i++;
               }
           })

           await channel.bulkDelete(filtered, true).then(messages =>{
               Response.setDescription(`🧹 Smazáno ${messages.size} zprávy od uživatele jménem ${Target}.`);
               interaction.reply({embeds: [Response]});
           })
       } else {
           await channel.bulkDelete(Amount, true).then(messages => {
            Response.setDescription(`🧹 Smazáno ${messages.size} z tohoto channelu.`);
            interaction.reply({embeds: [Response]});
           })
       }
    }
}