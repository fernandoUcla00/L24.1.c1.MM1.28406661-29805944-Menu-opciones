export default class CL_Menu {
    constructor(opcion) {
     this.opcion = opcion;
    }
    set opcion(o) {
        this._opcion = +o;
    }
    get opcion() {
        return this._opcion;
    }

    opcio(){
        switch(this.opcion) {
            case 1: 
            return "ver perfil";
            break;
            case 2: 
            return "enviar mensaje";
            break;
            case 3: 
            return "configuracion";
            break;
            case 4: 
            return "anadir la tarea";
            break;
            case 5: 
            return "presentar examen";
            break;
        }
    }
    

}
