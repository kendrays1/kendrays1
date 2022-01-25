const {
    CommandInteraction,
    MessageEmbed,
    Client
} = require('discord.js');

const { Anime } = require('an-anime-scraper')
const AnimeAPI = new Anime("gogoanime.ai")

module.exports = {
    name: 'animesearch',
    description: 'Get some juicy anime.',
    options: [{
        name: "animename",
        description: "The name of the anime.",
        type: "STRING",
        required: true,
    }],

    /**
     * 
     * @param {CommandInteraction} interaction 
     */

    async execute(interaction) {
        const AnimeName = interaction.options.getString("animename");
        const Embed = new MessageEmbed()
            .setFooter("FooterHere");
            
        try {
            AnimeAPI.animeInfoFetch(AnimeName).then(Data => {
                Embed.setColor("#FF0000")
                Embed.setThumbnail(Data.cover)
                Embed.setTitle(Data.name)
                Embed.setDescription(`**Summary**\n${Data.summary}\n\n**Type**\n${Data.type}\n\n**Genre**\n${Data.genre}\n\n**Released**\n${Data.releasedDate}\n\n**Status**\n${Data.status}\n\n**Other Names**\n${Data.otherName}\n\n**Episodes**\n${Data.episodeCount}\n\n**Link**\n${Data.link}`)

                return interaction.reply({
                    embeds: [Embed]
                });
            })
        } catch (err) {
            Embed.setColor("#FF9D00")
            Embed.setTitle("Error")
            Embed.setDescription(`Error has been catched ${err}`)

            return interaction.reply({
                embeds: [Embed]
            });
        }
    }
}