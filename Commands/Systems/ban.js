const {
	CommandInteraction,
	MessageEmbed, WebhookClient,
} = require("discord.js");


module.exports = {
	name: "ban",
	description: "Bans Target",
	permission: "BAN_MEMBERS",
	usage: "/ban [Target] [REASON] [MESSAGES]",
	options: [{
			name: "user",
			description: "Provide A User To Ban.",
			type: "USER",
			required: true
		},
		{
			name: "reason",
			description: "Provide A Reason For The Ban.",
			type: "STRING",
			required: true
		},
		{
			name: "messages",
			description: "Provide A Number Of Days For Their To Messages To Be Deleted Up To.",
			type: "STRING",
			required: true,
			choices: [{
					name: "Don't Delete Any",
					value: "0"
				},
				{
					name: "Delete Up To Seven Days",
					value: "7"
				}
			]
		}
	],
	/**
	 * @param {CommandInteraction} interaction
	 */
	async execute(interaction) {
		const options = interaction.options
		const target = options.getMember("user");
		const user = interaction.member
		const name = interaction.commandName
		const reason2 = "Invalid Permissions"
		const per = this.permission

		const Embed1 = new MessageEmbed()
			.setTitle("❌ Error Running Command ❌")
			.setColor("RED")
			.setTimestamp()
			.addFields({
				name: "Command:",
				value: name
			}, {
				name: "Reason:",
				value: reason2
			}, {
				name: "Needed Permissions:",
				value: per
			})

		if (!user.permissions.has("BAN_MEMBERS"))
			return interaction.reply({
				embeds: [Embed1],
				ephemeral: true
			}).catch((err) => {
				console.log(err)
			});


		if (target.id === interaction.member.id)
			return interaction.reply({
				embeds: [new MessageEmbed().setTitle("❌ Error ❌").setColor("RED")
					.setDescription("Why Are You Trying To Ban Yourself??").setTimestamp()
				],
				ephemeral: true
			});

		if (target.permissions.has("BAN_MEMBERS"))
			return interaction.reply({
				embeds: [new MessageEmbed().setColor("RED").setDescription("❌ You Can't Ban An Admin ❌")]
			});


		const reason = options.getString("reason");

		if (reason.length > 512)
			return interaction.reply({
				embeds: [new MessageEmbed().setTitle("❌ Can't Run Code With The Strings Given ❌").setColor("RED")
					.setDescription("Reason Can't Be More Than 512 Characters").setTimestamp()
				],
				ephemeral: true
			});
		target.send(
			new MessageEmbed()
			.setTitle(`You've Been Banned From ${interaction.guild.name}!`)
			.setColor("RED")
			.setTimestamp()
			.addFields({
				name: "Reason For Ban:",
				value: reason
			}, {
				name: "Banned By:",
				value: interaction.member.user.tag
			})
		)
		const Amount = options.getString("messages")

		target.ban({
			days: Amount,
			reason: reason
		})

        interaction.reply({content: `Sucessfuly banned ${target.user.username}...`})

             const announcer = new WebhookClient({
                url : "https://discord.com/api/webhooks/924413231370477580/qeYoDKtxB124duFUqGVfT4xeKbakkMeHXBgbOTafyUhMa1KQriLpxEHbGg1Mo6Df_Bok"
             })
            const ban = new MessageEmbed()
			.setColor("GREEN")
            
			.setAuthor(user.target, user.avatarURL({dynamic: true, size: 512}))

            .setDescription(`🟢 **${target.user.username}** Has Been Banned From ${interaction.guild.name} 🟢`)
            
            .setFooter(`${target.user.id}`)
           
			.setThumbnail("https://i.imgur.com/RqegYqw.jpg")

			

            announcer.send({embeds: [ban]})
    }
}