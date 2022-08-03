
const lblon = document.querySelector('#lblon')
const lbloff = document.querySelector('#lbloff')
const txtMensaje = document.querySelector('#txtMensaje')
const btnEnviar = document.querySelector('#btnEnviar')
const socket = io()
socket.on('connect', () => {
    console.log("Conectado")
    lblon.style.display = ''
    lbloff.style.display = 'none'
})
socket.on('disconnect', () => {
    console.log("Desconectado")
    lbloff.style.display = ''
    lblon.style.display = 'none'
})
socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})
btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value
    const payload = {
        mensaje,
        id: '132abc',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id)
    })
})

