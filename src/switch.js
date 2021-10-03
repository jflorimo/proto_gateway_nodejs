var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://0.0.0.0')

console.log("start...")
client.on('connect', function () {
    console.log("connected");
    client.subscribe('presence', function (err) {
        if (!err) {
            client.publish('presence', 'Hello mqtt')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})
