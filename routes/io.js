var io = require('socket.io')();

io.on('connection', function(client) {
	console.log('connected');

	client.on('message', function(data) {
		console.log('on message > data =', data)
		io.emit('blah', data)
	});
	// client.on('disconnect', function() {});
});

module.exports = io;