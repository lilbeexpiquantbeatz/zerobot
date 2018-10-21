const commando = require("discord.js-commando");
const discord = require("discord.js");

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description : 'Learn a little more about me!'
        });
    }

    async run(message, args)
    {
            message.channel.send(myInfo) = new discord.RichEmbed()
            .addField("ZeRo super titkos információi", true)
            .setColor(0xFF0000)
            .addField("Steam","https://steamcommunity.com/id/____________ZeRo1337____________/", false)
            .addField("Web","https://helpmeboosting.github.io/zeroyaa/zeroyaa.html")
            .setFooter("Mit akarsz még olvasni innen he?")
    }

}