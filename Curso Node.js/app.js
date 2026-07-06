// Mensaje de Presentación
console.log("PRESENTACIÓN");
console.log("Nombre: Juan Stenico");
console.log("Motivo para aprender backend: Desarrollar aplicaciones robustas y escalables con Node.js, dominar la lógica del servidor y crear APIs profesionales.");

// Módulo Nativo
import os from "os";
console.log("Nombre Sistema Operativo:", os.type());
console.log("Cantidad de Memoria Libre:", os.freemem());

// Módulo Propio
import mensajePersonalizado from "./mensaje.js";
console.log(mensajePersonalizado());