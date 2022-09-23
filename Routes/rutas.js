import  express  from 'express'
import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
import{ControladorReserva} from '../Controllers/ControladorReserva.js'

let controladorHabitacion = new ControladorHabitacion()//usando el controlador de habitaciones
let controladorReserva = new ControladorReserva()//usando el controlador de reservas
export let rutasPersonalizadas = express.Router()

rutasPersonalizadas.get('/hoteles/habitaciones',controladorHabitacion.BuscarHabitaciones)
rutasPersonalizadas.get('/hoteles/habitacion/:id',controladorHabitacion.BuscarHabitacionesPorId)
rutasPersonalizadas.post('/hoteles/habitaciones', controladorHabitacion.RegistrarHabitacion)
rutasPersonalizadas.put('/hoteles/habitaciones', controladorHabitacion.EditarHabitacion)
rutasPersonalizadas.get('/hoteles/reservas',controladorReserva.BuscarReserva)
rutasPersonalizadas.get('/hoteles/reservas/:id',controladorReserva.BuscarReservaPorId)
rutasPersonalizadas.post('/hoteles/reservas',controladorReserva.RegistrarReserva)
rutasPersonalizadas.put('/hoteles/reservas',controladorReserva.EditarReserva)
rutasPersonalizadas.delete('/hoteles/reservas',controladorReserva.EliminarReserva)
