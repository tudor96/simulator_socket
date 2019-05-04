// var net = require('net');
// let run = require('gen-run');

// function sleep(time) {
//     return function (callback) {
//         setTimeout(function () {
//             // console.log(time);
//             callback();
//         }, time);
//     }
// }

// var i = 1;
// var once = true;
// var time = 0

// var server = net.createServer(function (socket) {

//     console.log(socket.listenerCount());


    
//     function update() {

//           if (time == 30000) {
//             clearInterval(id);
//           } else {
//             time+=5000; 
//             i++
//           }
//     }

// server.getConnections(function (error, count) {
//     if (count > 1)
//         once = false
// });

// if (once)
//     var id = setInterval(update, 5000);

// var x = "1".concat(i); console.log(x); socket.write(x);
// // socket.pipe(socket);
// });

// server.listen(1337, '127.0.0.1');

// function listener() {

//     var width = 0;
//     var id = setInterval(frame, 1000);

//     function frame() {
//         var net = require('net');



//         var client = new net.Socket();

//         client.connect(1337, '127.0.0.1', function () {
//             console.log('Connected');

//             client.write("Send from client");
//         });



//         client.on('data', function (data) {
//             console.log('DATAS IN CLIENT:::: ' + data);
//             client.destroy(); // kill client after server's response
//         });

//         client.on('close', function () {
//             console.log('Connection closed');
//         });







var net = require('net');

var server = net.createServer(function(socket) {
    // socket.write('Echo server\r\n');
    socket.on('data', function(data){
		console.log(data);
        textChunk = JSON.stringify(data);
        text = JSON.parse(textChunk);
		console.log("MY DATA",text.data, textChunk.data);
		socket.write(textChunk);
	});
	// socket.pipe(socket);
});

server.listen(3000, '127.0.0.1');
