export class ControladorHabitacion{
    constructor(){}


    BuscarHabitaciones(request, response){
        response.send("Estoy buscando habitaciones desde el controlador")
    }
    BuscarHabitacionesPorId(request, response){
        response.send("Estoy buscando habitaciones por id desde el controlador")
    }
    RegistrarHabitacion(request, response){
        response.send("Estoy agregando habitaciones desde el controlador")
    }
    EditarHabitacion(request, response){
        response.send("Estoy editando habitaciones desde el controlador")
    }



    
}