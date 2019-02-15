const commando = require('discord.js-commando');
class newTeamsCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'newteams',
            group: 'simple',
            memberName: 'newteams',
            description: 'Resets all the teams'
        });
    }

    async run(message, args)
    {
        currentTeamMembers = [];
        message.reply('The current team has been reset')
    }
}

module.exports = newTeamsCommand;
