const commando = require('discord.js-commando');
const Discord = require('discord.js');
class infoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Provides you with some information about me!'
        });
    }

    async run(message, args)
    {
        var myInfo = new Discord.RichEmbed()
            .setTitle('Info on the owner')
            .addField('About me', 'My name is Kai, i\'m 16, and I am from the US. I have custom coded this bot so tell me any suggestions you have :)')
            .setColor("#FF0000")
            .setThumbnail(message.author.avatarURL)
            .setFooter('Thanks for asking about me! I hope you learned a litte.')
        
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = infoCommand;