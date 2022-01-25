const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "fotka",
    description: "Create a suggestion in an orginized matter.",
    permission: "BAN_MEMBERS",
  

            /**
             * 
             * @param {CommandInteraction} interaction 
             */
            async execute(interaction) { 
                const Response = new MessageEmbed()
                .setColor("PURPLE")
                .setDescription(`Stará fotka serveru`)
                .setFields("UwU")
                .setThumbnail("https://cdn.discordapp.com/icons/924231902980874280/44feda1af063676660835c89082b71a8.png?size=4096")
                const message = await interaction.reply({embeds: [Response], fetchReply: true})
            }
        };
               
