const {
    CommandInteraction,
    MessageEmbed,
    Client,
} = require('discord.js');

const HentaiPackage = require("discord-hentai");
const Anime = HentaiPackage.Anime;

module.exports = {
    name: 'hentai',
    description: 'Get some juicy hentai.',
    options: [{
        name: "type",
        description: "Type of hentai.",
        type: "STRING",
        required: true,
        choices: [{
                name: "Hentai",
                value: "hentai",
            },
            {
                name: "Thighs",
                value: "thighs",
            },
            {
                name: "Swimsuit",
                value: "swimsuit",
            },
            {
                name: "Hanal",
                value: "hanal",
            },
            {
                name: "Neko",
                value: "neko",
            },
            {
                name: "Kistsune",
                value: "kistsune",
            },
            {
                name: "Holo",
                value: "holo",
            },
            {
                name: "NekoGIF",
                value: "nekogif",
            },
            {
                name: "Lesbian",
                value: "lesbian",
            }
        ]
    }],

    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */

    async execute(interaction) {
        const type = interaction.options.getString("type");
        const Embed = new MessageEmbed()
        .setFooter("oh")
        .setColor("#FF0000");

        try {
            switch (type) {
                case "hentai": {
                    Embed.setImage(await Anime.hentai());
                    Embed.setTitle("Hentai.");

                    return interaction.reply({
                        embeds: [Embed]
                    })
                }

                case "thighs": {
                    Embed.setImage(await Anime.thighs());
                    Embed.setTitle("Thighs.");

                    return interaction.reply({
                        embeds: [Embed]
                    })
                }

                case "swimsuit": {
                    Embed.setImage(await Anime.swimsuit());
                    Embed.setTitle("Swimsuit.");

                    return interaction.reply({
                        embeds: [Embed]
                    })
                }

                case "hanal": {
                    Embed.setImage(await Anime.hanal());
                    Embed.setTitle("Hanal.");

                    return interaction.reply({
                        embeds: [Embed]
                    })
                }

                case "neko": {
                    Embed.setImage(await Anime.neko());
                    Embed.setTitle("Neko.");

                    return interaction.reply({
                        embeds: [Embed]
                    })
                }

                case "kistsune": {
                    Embed.setImage(await Anime.kitsune());
                    Embed.setTitle("Kistsune.");

                    return interaction.reply({
                        embeds: [Embed]
                    })
                }

                case "holo": {
                    Embed.setImage(await Anime.holo());
                    Embed.setTitle("Holo.");

                    return interaction.reply({
                        embeds: [Embed]
                    })
                }

                case "nekogif": {
                    Embed.setImage(await Anime.nekoGif());
                    Embed.setTitle("Neko Gif.");

                    return interaction.reply({
                        embeds: [Embed]
                    })
                }

                case "lesbian": {
                    Embed.setImage(await Anime.lesbian());
                    Embed.setTitle("Lesbian.");

                    return interaction.reply({
                        embeds: [Embed]
                    })
                }
            }
        } catch (err) {
            Embed.setColor("#FF9D00")
            Embed.setTitle("Error Occured.")
            Embed.setDescription(`The error is: ${err}`)

            return interaction.reply({
                embeds: [Embed]
            })
        }
    }
}