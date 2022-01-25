const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "návrh",
    description: "Create a suggestion in an orginized matter.",
    permissions: "ADMINISTRATOR",
    options: [
        {
            name: "type",
            description: "Select the type.",
            required: true,
            type: "STRING",
            choices: [
                {
                    name: "Command",
                    value: "Command"
                },
                {
                    name: "Event",
                    value: "Event"
                },
                {
                    name: "System",
                    value: "System"
                },
            ]
        },
                {
                    name: "name",
                    description: "Provide a name for your suggestion.",
                    type: "STRING",
                    required: true
                
                },
                {
                    name: "functionality",
                    description: "Describe the functionality of this suggestion ",
                    type: "STRING",
                    required: true
                
                },
            ],
            /**
             * 
             * @param {CommandInteraction} interaction 
             */
            async execute(interaction) {
                const { options } = interaction;

                const type = options.getString("type");
                const name = options.getString("name");
                const funcs = options.getString("functionality");

                const Response = new MessageEmbed()
                .setColor("BLURPLE")
                .setDescription(`${interaction.member} použil ${type} k vytvoření návrhu.`)
                .addField("Název", `${name}`, true)
                .addField("Nápad", `${funcs}`, true)
                const message = await interaction.reply({embeds: [Response], fetchReply: true})


            }
        }
