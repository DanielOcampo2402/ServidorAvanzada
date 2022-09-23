export class ControladorReserva{
    constructor(){}


    BuscarReserva(request, response){
        response.send("Estoy buscando reservas desde el controlador")
    }
    BuscarReservaPorId(request, response){
        response.send("Estoy buscando reservas por id desde el controlador")
    }
    RegistrarReserva(request, response){
        response.send("Estoy agregando reservas desde el controlador")
    }
    EditarReserva(request, response){
        response.send("Estoy editando reservas desde el controlador")
    }
    EliminarReserva(request, response){
        response.send("Estoy eliminando reservas desde el controlador")
    }




    
}