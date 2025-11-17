require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ]
});

client.once('clientReady', () => {
  console.log(`✅ Bot is online as ${client.user.tag}`);
  console.log(`📊 Connected to ${client.guilds.cache.size} server(s)`);
});

client.on('guildMemberAdd', async (member) => {
  const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '𝘸𝘦𝘭𝘤𝘰𝘮𝘦ㆍ👋');
  
  if (!welcomeChannel) {
    console.log('⚠️ Welcome channel not found');
    return;
  }

  const welcomeEmbed = new EmbedBuilder()
    .setColor('#FFFFFF')
    .setTitle('Kenbeams')
    .setDescription(`Welcome ${member} to the server Kenbeams! | We wish for you to have a good day!`)
    .setImage('https://media.giphy.com/media/L3cMTd3eoTuDRdujba/giphy.gif');

  try {
    await welcomeChannel.send({ embeds: [welcomeEmbed] });
    console.log(`✅ Sent welcome message for ${member.user.tag}`);
  } catch (error) {
    console.error('❌ Error sending welcome message:', error);
  }
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!embed')) {
    const embed = new EmbedBuilder()
      .setColor('#0099ff')
      .setTitle('Welcome to Discord Embeds!')
      .setDescription('This is a beautiful embed message created with discord.js')
      .addFields(
        { name: 'Field 1', value: 'This is a field', inline: true },
        { name: 'Field 2', value: 'Fields can be inline', inline: true },
        { name: 'Field 3', value: 'Or take the full width', inline: false }
      )
      .setThumbnail('https://i.imgur.com/AfFp7pu.png')
      .setImage('https://i.imgur.com/wSTFkRM.png')
      .setTimestamp()
      .setFooter({ text: 'Powered by discord.js', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

    await message.channel.send({ embeds: [embed] });
  }

  if (message.content.startsWith('!info')) {
    const infoEmbed = new EmbedBuilder()
      .setColor('#00ff00')
      .setTitle('ℹ️ Information Embed')
      .setDescription('Here is some useful information!')
      .addFields(
        { name: '📌 Status', value: 'Online', inline: true },
        { name: '🕒 Uptime', value: `${Math.floor(client.uptime / 1000 / 60)} minutes`, inline: true }
      )
      .setTimestamp();

    await message.channel.send({ embeds: [infoEmbed] });
  }

  if (message.content.startsWith('!help')) {
    const helpEmbed = new EmbedBuilder()
      .setColor('#ff9900')
      .setTitle('📚 Help - Available Commands')
      .setDescription('Here are all the commands you can use:')
      .addFields(
        { name: '!embed', value: 'Shows a sample embed with various features', inline: false },
        { name: '!info', value: 'Displays bot information', inline: false },
        { name: '!help', value: 'Shows this help message', inline: false },
        { name: '!welcome', value: 'Sends a welcome embed', inline: false },
        { name: '!error', value: 'Shows an error-styled embed', inline: false },
        { name: '!verify', value: 'Sends verification embed with button', inline: false },
        { name: '!send', value: 'Shows the KENBEAMS sites embed', inline: false },
        { name: '!autohar', value: 'Shows the KENBEAMS autohar site embed', inline: false }
      )
      .setFooter({ text: 'Need more help? Ask away!' })
      .setTimestamp();

    await message.channel.send({ embeds: [helpEmbed] });
  }

  if (message.content.startsWith('!welcome')) {
    const welcomeEmbed = new EmbedBuilder()
      .setColor('#9b59b6')
      .setTitle('👋 Welcome!')
      .setDescription(`Welcome ${message.author.username} to our server!`)
      .setThumbnail(message.author.displayAvatarURL())
      .addFields(
        { name: 'Account Created', value: `<t:${Math.floor(message.author.createdTimestamp / 1000)}:R>`, inline: true },
        { name: 'User ID', value: message.author.id, inline: true }
      )
      .setTimestamp();

    await message.channel.send({ embeds: [welcomeEmbed] });
  }

  if (message.content.startsWith('!error')) {
    const errorEmbed = new EmbedBuilder()
      .setColor('#ff0000')
      .setTitle('❌ Error')
      .setDescription('This is what an error embed might look like')
      .addFields(
        { name: 'Error Code', value: '404', inline: true },
        { name: 'Error Type', value: 'Not Found', inline: true },
        { name: 'Details', value: 'The requested resource could not be found', inline: false }
      )
      .setTimestamp();

    await message.channel.send({ embeds: [errorEmbed] });
  }

  if (message.content.startsWith('!verify')) {
    const verifyEmbed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('──── VERIFY ────')
      .setDescription('Verification is very important, We gonna transfer you in future server incase our server got termed. Also Verify to acess command!!!')
      .setImage('https://media.giphy.com/media/uFai8S5qwcLiTxyIq4/giphy.gif');

    const verifyButton = new ButtonBuilder()
      .setLabel('Verify Now')
      .setStyle(ButtonStyle.Link)
      .setURL('https://restorecord.com/verify/Kenbeams')
      .setEmoji('🚀');

    const row = new ActionRowBuilder()
      .addComponents(verifyButton);

    await message.channel.send({ embeds: [verifyEmbed], components: [row] });
  }

  if (message.content.startsWith('!send')) {
    const sendEmbed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('`KENBEAMS  |  #1  SITES`')
      .setDescription('# 3 ACTIVE DOMAINS <:flamma:1439235481790582854>\n# FASTER LOGINS & BETTER FEATURES')
      .addFields(
        { name: '__\nPros', value: '<:veri:1439235584328470670> No account stealing\n<:veri:1439235584328470670> Frequent updates\n<:veri:1439235584328470670> Secured', inline: false }
      )
      .setImage('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDVqMWZnNW5sejUyNGZsOGhpNmNiazhhN2E0dnc2aDQ1cjc4aXVkMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F9LLnsBpQvCz7MDp8X/giphy.gif');

    const webpageButton = new ButtonBuilder()
      .setLabel('WEBPAGE')
      .setStyle(ButtonStyle.Link)
      .setURL('https://www.logged.tg/auth/kenbeams');

    const row = new ActionRowBuilder()
      .addComponents(webpageButton);

    await message.channel.send({ embeds: [sendEmbed], components: [row] });
  }

  if (message.content.startsWith('!autohar')) {
    const autoharEmbed = new EmbedBuilder()
      .setColor('#FFFFFF')
      .setTitle('Kenbeams  | #1 Autohar Site')
      .setDescription('Different Links! ✅ | Stable | No Dualhook ❌\n_')
      .setImage('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcW1rdDJ0ZXhvcjVoaHJpaXpvMjdzaHV4b3A4anI3MzZqenZ4OHFzMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bNeuCAPRfbQtaOcipk/giphy.gif');

    const autoharButton = new ButtonBuilder()
      .setLabel('AUTOHAR')
      .setStyle(ButtonStyle.Link)
      .setURL('https://autohar.st/#/gen?ref=V4xdWM4dQm4llfYeGow4x8LLq');

    const row = new ActionRowBuilder()
      .addComponents(autoharButton);

    await message.channel.send({ embeds: [autoharEmbed], components: [row] });
  }
});

client.on('error', (error) => {
  console.error('❌ Discord client error:', error);
});

const token = process.env.DISCORD_BOT_TOKEN;

if (!token) {
  console.error('❌ Error: DISCORD_BOT_TOKEN not found in environment variables!');
  console.log('📝 Please add your Discord bot token to the Secrets tab');
  process.exit(1);
}

client.login(token).catch((error) => {
  console.error('❌ Failed to login:', error.message);
  process.exit(1);
});
