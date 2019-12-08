const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjUzMjQ2Njg2MTY0MTU2NDI2.Xe0Wmg.HmPo7ONhv_OOZxH65Hz4ckyLOHw);//BOT_TOKEN is the Client Secret
