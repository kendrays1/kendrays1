const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "tiktok",
    description: "Create a suggestion in an orginized matter.",
    permission: "ADMINISTRATOR",
  

            /**
             * 
             * @param {CommandInteraction} interaction 
             */
            async execute(interaction) { 
                const Response = new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription(`Tiktok Account.`)
                .addField("Name", "_frajeri", true)
                .addField("Password", "frajeri2022++", true)
                const message = await interaction.reply({embeds: [Response], fetchReply: true})

            }
        };
               
