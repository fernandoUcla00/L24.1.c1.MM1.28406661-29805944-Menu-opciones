export default class CL_IMenu {
      
    leerOpciones() {
           
        return prompt("Elija una opcion: \n 1. ver perfil \n 2. enviar mensaje \n 3. configuracion \n 4. anadir la tarea \n 5. presentar examen");
    }

    reporteMenu(c){
        return `
        <br> la opcion seleccionada es :  ${c}
        `
    }
}