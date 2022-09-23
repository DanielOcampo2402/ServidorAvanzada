export class ControladorHabitacion{
    constructor(){}


    BuscarHabitaciones(request, response){
        try {
            response.status(200).json({
                "mensaje": "exito en la consulta",
                "datos":"AQUI VAN LOS DATOS DE HABITACIONES"
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }

    }
    BuscarHabitacionesPorId(request, response){
        try {
            response.status(200).json({
                "mensaje":"exito al buscar por id",
                "datos":"AQUI VAN LOS DATOS DE HABITACION POR ID"
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
       
    }
    RegistrarHabitacion(request, response){
        try {
            response.status(200).json({
                "mensaje": "exito al registrar la habitacion",
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
    }
    EditarHabitacion(request, response){
        try {
            response.status(200).json({
                "mensaje": "exito editando la habitacion ",
                "datos":null
            })
        } catch (error) {
            response.status(400).json({
                "mensaje": "error en la consulta" + error,
                "datos":null
            })
        }
    }



    
}