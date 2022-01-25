const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "prikazy",
    permission: "SEND_MESSAGES",
    description: "Create a suggestion in an orginized matter.",
  

            /**
             * 
             * @param {CommandInteraction} interaction 
             */
            async execute(interaction) { 
                const Response = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`Příkazy bota.`)
                .setThumbnail("https://i.imgur.com/RqegYqw.jpg")
                .addField("/anime", "Příkazy pro Anime",true)
                .addField("/music", "Příkazy k muzice",true)
                .addField("/minecraft", "Minecraft staty ohledně účtu", true)
                .addField("/maintenance", "Vypne bota na určitou dobu dokud nebude funkční", true)
                .addField("/random", "Random čísla", true)
                .addField("/tiktok", "Ukáže údaje pro tiktok", true)
                .addField("/unban","Příkaz k odbanování hráče", true)
                .addField("/ban","Příkaz k zabanování hráče", true)
                .addField("/hentai","Pošle fotky", true)
                .addField("/animeinf","Najde staty o anime", true)
                .addField("/corona","Ukáže informace ohledně covidu", true)
                .addField("/announcement", "Oznámí vše, co chcete oznámit v oznamovacím kanálu.", true)
                .addField("/návrh", "Vytvořte návrh v organizované záležitosti", true)
                .addField("/lockdown", "Zamkne/Odemkne channel který potřebujete", true)
                .addField("/fotka", "zobrazí starou fotku pro discord server")
                const message = await interaction.reply({embeds: [Response], fetchReply: true})
            }
        };
               
