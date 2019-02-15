const commando = require('discord.js-commando');
class joinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel of the person who sent the command'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                .then(connection =>{
                    message.reply('Successfully connected');
                })
            }
        }
        else
        {
            message.reply('You are not in a voice channel :(');
        }
        
    }
}

module.exports = joinChannelCommand;
