const {
	CommandInteraction,
	MessageEmbed
} = require("discord.js");


module.exports = {
	name: "unban",
	description: "Unbans Target",
	permission: "BAN_MEMBERS",
	usage: "/unban [Target] [DŮVOD]",
	options: [{
			name: "id",
			description: "Poskytněte uživateli zrušení zákazu.",
			type: "STRING",
			required: true
		},
		{
			name: "důvod",
			description: "Poskytněte důvod pro Unban.",
			type: "STRING",
			required: true
		}
	],
	/**
	 * @param {CommandInteraction} interaction
	 */
	execute(interaction) {
		const options = interaction.options
		const userID = options.getString("id");
		const uživatel = interaction.member
		const name = interaction.commandName
		const error = "User Not Banned Or Doesn't Exist"
		const reason2 = "Invalid Permissions"
		const per = this.permission

		const Embed1 = new MessageEmbed()
			.setTitle("❌Chyba při spuštění příkazu❌")
			.setColor("RED")
			.setTimestamp()
			.addFields({
				name: "Command:",
				value: name
			}, {
				name: "důvod:",
				value: reason2
			}, {
				name: "Needed Permissions:",
				value: per
			})

		if (!uživatel.permissions.has("BAN_MEMBERS"))
			return interaction.reply({
				embeds: [Embed1],
				ephemeral: true
			}).catch((err) => {
				console.log(err)
			})

		const důvod = options.getString("důvod");

		if (důvod.length > 512)
			return interaction.reply({
				embeds: [new MessageEmbed().setTitle("❌ Nelze spustit kód s danými řetězci ❌").setColor("RED")
					.setDescription("Důvod nemůže mít více než 512 znaků").setTimestamp()
				],
				ephemeral: true
			});

		const SuccessEmbed = new MessageEmbed()
			.setTitle(`🟢 Odbanováno **[${userID}]** úspěšně z ${interaction.guild.name} 🟢`)
			.setColor("RED")
			.setTimestamp()
			.addFields({
				name: "Důvod For Unban:",
				value: důvod
			})

		const ErrorEmbed = new MessageEmbed()
			.setTitle(`❌ Nepodařilo se odbanovat [${userID}] z ${interaction.guild.name} ❌`)
			.setColor("RED")
			.setTimestamp()
			.addFields({
				name: "Důvod je chybný:",
				value: error
			})

		interaction.guild.members.unban(userID)
			.then(() => {
				interaction.reply({
					embeds: [SuccessEmbed],
					ephemeral: true
				})
			})
			.catch(() => {
				interaction.reply({
					embeds: [ErrorEmbed],
					ephemeral: true
				})
			})
	}
}