const commando = require('discord.js-commando');
class joinTeamCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'jointeam',
            group: 'simple',
            memberName: 'jointeam',
            description: 'joins the current team'
        });
    }

    async run(message, args)
    {
        currentTeamMembers.push(message.author);
        message.reply('You have joined the current team');
    }
}

module.exports = joinTeamCommand;