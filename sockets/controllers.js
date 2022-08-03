const  socketController = (client)=> {

    console.log("cliente conectado",client.id)
    client.on("disconnect",()=>{
        console.log("cliente desconectado",client.id)
    })


    client.on('enviar-mensaje',(payload,callback)=>{
        const id = 1231321312
        callback(id)
       // console.log(payload)
       client.broadcast.emit('enviar-mensaje',payload)
    })
    

}


module.exports={
    socketController
}