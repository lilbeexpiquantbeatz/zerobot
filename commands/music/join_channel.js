  
const Commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message)
{
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message);
        }
        else
        {
            connection.disconnect();
        }
    });
}

class JoinChannelCommand extends Commando.Command 
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel of the commander'
        });

    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id])
                {
                    servers[message.guild.id] = {queue: []}
                }
                var server = servers[message.guild.id]
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.reply("Sikeres csatlakozás!");
                        server.queue.push(args);
                        Play(connection, message);
                })
            }
        }
        else
        {
            message.reply("Be kell lépj egyik voice channelbe autizmoboi!")
        }
    }
}

module.exports = JoinChannelCommand;