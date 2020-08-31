var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

// Escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});


// Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Guillermo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('resp server: ', resp);
});


// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});