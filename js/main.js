import {AddToDo} from "../js/module/crud.js"


// async function menuPosts() {
//     let menu = Number(prompt(`
//         Post Menu:
//         1. View All
//         2. Add
//         3. Delete
//         4. Update
//         0. Back
//     `, 1));

//     if (menu == 1) {
        
//     }
// }

const agregarTarea = async () => {
    let act = {};
    act.task = prompt("Ingrese la tarea:");
    act.status = "On Hold";
    let resultado = await AddToDo(act);
    console.log(resultado);
};

agregarTarea();