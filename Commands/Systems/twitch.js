const { CommandInteraction, MessageEmbed, WebhookClient} = require("discord.js");

module.exports = {
    name: "twitch",
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
                    name: "Youtube",
                    value: "Youtube"
                    
                },
                
                {
                    name: "Twitch",
                    value: "Twitch"
                },
            ]
        },
                {
                    name: "game",
                    description: "Select game which u now streaming.",
                    type: "STRING",
                    required: true,
                    type: "STRING",
                    choices : [
                        {
                            name: "CS:GO",
                            value: "CS:GO"
                        },
                        {
                            name: "FiveM",
                            value: "FiveM"
                        },
                        {
                            name: "Minecraft",
                            value: "Minecraft"
                        },
                        {
                            name: "League of Legends",
                            value: "League of Legends"
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
                    url : "https://discord.com/api/webhooks/927267051742040065/-qjBeYOwcRcX3WTP6FMz_c0zns9SIgb201df2gixlUsqZFcVZ-526I9tFQusfFBCinI4"})
                const type = options.getString("type");
                const role = interaction.guild.roles.everyone
                const game = options.getString("game");

                const Twitch = new MessageEmbed()
                .setColor("ORANGE")
                .setFooter(`${interaction.member} pou??il ${type} k ozn??men?? ??e je LIVE na twitchi.`)
                .setTitle("Twitch Ozn??men??", true)
                .addField("Zdarec jsem online, a t??mto ozn??men??m bych t?? r??d pozval na m??j stream abychom si u??ili z??bavu ??i popov??dali", "https://www.twitch.tv/kendrays1", true)
                .addField("Pokud chce?? zn??t m??j rozvrh napi?? p????kaz", "/rozvrh", true)
                .addField( "Hra", `${game}`, true)
                .addField("Ozna??en", `${role}`, true)
                .setThumbnail("https://i.imgur.com/RqegYqw.jpg")
                const message = await interaction.reply("Jsem live! Tak nev??hej, a b???? se kouknout!!") 
                announcer.send({embeds: [Twitch]})
            }
        }
