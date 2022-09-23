export class ControladorReserva{
    constructor(){}


    BuscarReserva(request, response){
        try {
            response.status(200).json({
                "mensaje": "exito al buscar reservas",
                "datos":"AQUI VAN LOS DATOS DE LAS RESERVAS"
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
        

    }
    BuscarReservaPorId(request, response){
        try {
            response.status(200).json({
                "mensaje": "exito al buscar reservas por id",
                "datos":"AQUI VAN LOS DATOS DE LAS RESERVAS POR ID"
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
        
        
    }
    RegistrarReserva(request, response){
        try {
            response.status(200).json({
                "mensaje": "exito al registrar la reserva",
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
        
        //response.send("Estoy agregando reservas desde el controlador")
    }
    EditarReserva(request, response){
        try {
            response.status(200).json({
                "mensaje": "exito editando la reserva ",
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
        //response.send("Estoy editando reservas desde el controlador")
    }
    EliminarReserva(request, response){
        try {
            response.status(200).json({
                "mensaje": "exito eliminando la reserva ",
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
        //response.send("Estoy eliminando reservas desde el controlador")
    }




    
}