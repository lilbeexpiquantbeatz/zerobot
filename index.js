const Commando = require("discord.js-commando");
const bot = new Commando.Client();
const TOKEN = "NDMyNjAzNTgyNDA4Mjk0NDAx.DiE2vw.QDmnsxRuDWOZEXR76hFQZilvSH4"

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', a !help szó beírásával láthatod az elérhető parancsokat!');
    }


});

bot.on('message', function(message){
    if(message.content == 'hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', a !help szó beírásával láthatod az elérhető parancsokat!');
    }


});

bot.on('message', function(message){
    if(message.content == '!help')
    {
        message.channel.sendMessage('Parancsok listája');
        message.channel.sendMessage('(!)szabályzat');
    }


});

bot.on('message', function(message){
    if(message.content == '!szabályzat')
    {
        message.channel.sendMessage('Ne legyél Ricsi!');
        message.channel.sendMessage('Ne legyél antiszoc!');
        message.channel.sendMessage('Ne legyél fotykos!');
        message.channel.sendMessage('HA RICSI VAGY MARADJ CSÖNDBE!');
    }


});

bot.on('message', function(message){
    if(message.content == '!bot')
    {
        message.channel.sendMessage('Weblap: https://helpmeboosting.github.io/zeroyaa/zeroyaa.html ');
        message.channel.sendMessage('Steam: https://steamcommunity.com/id/____________ZeRo1337____________/ ');
 
    }


});


bot.on('message', function(message){
    if(message.content == 'kurva anyád')
    {
        message.channel.sendMessage('a nyári villám rázná meg a faszod');
 
    }


});

bot.on('ready',function() {
console.log("Ready");

})




bot.login(TOKEN);