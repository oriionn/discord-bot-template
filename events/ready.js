const Discord = require("discord.js");
const { REST, Routes } = require('discord.js');

const rest = new REST().setToken(process.env.TOKEN);

module.exports = {
  once: true,
  execute: async (client) => {
    console.log(`${client.user.tag} is ready.`);
    client.user.setPresence({ activities: [{ name: `Discord`, type: Discord.ActivityType.Playing }], status: "online" });

    let cmds = [];
    client.commands.forEach((command) => {
      console.log(`${command.slash.name} loaded.`)
      cmds.push(command.slash);
    })

    let data = await rest.put(Routes.applicationCommands(client.user.id), { body: cmds });
  }
}