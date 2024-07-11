/**Diseña un menú con opciones numeradas (1 “Ver perfil”, 2 “Enviar mensaje”, 3 “Configuración”, 4: “Añadir la
tarea” 5: “Presentar examen”). El programa debe solicitar opción o selección elegida en número y mostrar el
nombre de la opción**/

import CL_IMenu from "./CL_IMenu.js";
import CL_Menu from "./CL_Menu.js";

let Imenu = new CL_IMenu(),
  o = Imenu.leerOpciones(),
  menu = new CL_Menu(o),
  salida = document.getElementById("salida");
  
  salida.innerHTML = Imenu.reporteMenu(menu.opcio());