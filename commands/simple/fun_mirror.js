const commando = require('discord.js-commando');
class funMirrorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'funmirror',
            group: 'simple',
            memberName: 'funmirror',
            description: 'Looks at your reflection in a mirror'
        });
    }

    async run(message, args)
    {
        message.channel.send(message.author.avatarURL);
        message.reply('Looking snazzy ;)')
    }
}

module.exports = funMirrorCommand;