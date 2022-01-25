const { CommandInteraction, MessageEmbed, WebhookClient} = require("discord.js");

module.exports = {
    name: "novinky",
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
                    name: "Command",
                    value: "Command"
                },
                
                {
                    name: "opravu",
                    value: "opravu"
                },

            ]
        },
                {
                    name: "nazev",
                    description: "Provide a name for your suggestion.",
                    type: "STRING",
                    required: true
                
                },
                {
                    name: "funkce",
                    description: "Describe the functionality of this suggestion ",
                    type: "STRING",
                    required: true
                
                },
                {
                    name: "budoucna",
                    description: "write future update at bot",
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
                const announcer = new WebhookClient({
                    url : "https://discord.com/api/webhooks/924445217694814300/U50gLmNQDInGhpOpmylZm7Zl08kH2tdkE3DyuF9N9N_9s9bUsx1a37vOUTgWjiu7lnyR"})
                const type = options.getString("type");
                const name = options.getString("nazev");
                const funcs = options.getString("funkce");
                const fut = options.getString("budoucna");
                const role = interaction.guild.roles.everyone

                const Novinky = new MessageEmbed()
                .setColor("ORANGE")
                .setFooter(`${interaction.member} použil ${type} k zapisování novinek ohledně bota.`)
                .setTitle(`${name}`, true)
                .addField("Novinky", `${funcs}`, true)
                .addField("Budoucí úpravy", `${fut}`, true)
                .addField("Označen", `${role}`, true)
                .setThumbnail("https://i.imgur.com/RqegYqw.jpg") 
                const message = await interaction.reply("Byli přidány novinky! Tak neváhej, a běž se kouknout!!")
                announcer.send({embeds: [Novinky]})
            }
        }
