const { CommandInteraction, MessageEmbed, WebhookClient} = require("discord.js");

module.exports = {
    name: "soutez",
    description: "Create a suggestion in an orginized matter.",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "type",
            description: "Select the type.",
            required: true,
            type: "STRING",
            choices: [
                {
                    name: "Soutez",
                    value: "Soutez"
                    
                },
            ]
        },
                {
                    name: "ucet",
                    description: "Select game which u now streaming.",
                    type: "STRING",
                    required: true,
                    type: "STRING",
                    choices : [
                        {
                            name: "Crunchyroll",
                            value: "Crunchyroll"
                        },
                        {
                            name: "Netflix",
                            value: "Netflix"
                        },
                        {
                            name: "Spotify",
                            value: "Spotify"
                        },
                        {
                            name: "Uplay",
                            value: "Uplay"
                        }
                    ]
                
                },
            ],
            /**
             * 
             * @param {CommandInteraction} interaction 
             */
            async execute(interaction) {
                const { options } = interaction;
                const announcer = new WebhookClient({
                    url : "https://discord.com/api/webhooks/929676470849273927/0QwTR839O3Asr0Kc5DNBhOFv59h__rCuJj4LQlLcb6gvx_AksAWBe3Si_TqZOXePaDC5"})
                const type = options.getString("type");
                const role = interaction.guild.roles.everyone
                const ucet = options.getString("ucet");

                const Souttez = new MessageEmbed()
                .setColor("ORANGE")
                .setFooter(`${interaction.member} pou??il ${type} k ozn??men?? ??e je SOUT????.`)
                .setTitle("Sout???? o ", `${ucet}`, true)
                .addField("Zdarec rozhodl jsem se ud??lat sout???? o", `${ucet}`, true)
                .addField("Podm??nky pro z????astn??n?? sout????e je zareagovat pomoc?? emotu ", `${ucet}`, true)
                .addField( "Sout???? o", `${ucet}`, true)
                .addField("Ozna??en", `${role}`, true)
                .setThumbnail("https://i.imgur.com/otVCNGL.png")
                .setTimestamp()
                const message = await interaction.reply("Sout???? nastavena!!") 
                announcer.send({embeds: [Souttez]})
            }
        }
