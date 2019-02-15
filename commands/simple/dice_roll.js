const commando = require('discord.js-commando');
class diceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'rolls a dice and returns a number 1-6'
        });
    }

    async run(message, args)
    {
        var numRoll = Math.floor((Math.random()*6)+1);
        message.reply('Your number was ' + numRoll);
    }
}

module.exports = diceRollCommand;