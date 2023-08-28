const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fs = require("fs");

module.exports = {
  slash: new SlashCommandBuilder()
      .setName('ping')
      .setDescription("Pong!"),

  execute: (client, interaction) => {
    interaction.reply("Pong!")
  }
}