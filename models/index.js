import Asistencias from "./Asistencias.js";
import Ausencias from "./Ausencias.js";
import Capacitaciones from "./Capacitaciones.js";
import Contratos from "./Contratos.js";
import DerechoH from "./DerechoH.js";
import Empleado from "./Empleado.js";
import Usuario from "./Usuario.js";
import Bitacora from './Bitacora.js'

Asistencias.belongsTo(Empleado, {foraingKey: 'empleadoFicha'})
Ausencias.belongsTo(Empleado, {foraingKey: 'empleadoFicha'})
Capacitaciones.belongsTo(Empleado, {foraingKey: 'empleadoFicha'})
Contratos.belongsTo(Empleado, {foraingKey: 'empleadoFicha'})
DerechoH.belongsTo(Empleado, {foraingKey: 'empleadoFicha'})
Bitacora.belongsTo(Usuario, {foraingKey: 'usuarioFicha'})

export {
    Asistencias,
    Ausencias,
    Capacitaciones,
    Contratos,
    DerechoH,
    Empleado,
    Usuario
}
