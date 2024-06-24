import {getAllOnHold,getAllready,AddToDo} from "../js/module/crud.js"
import { galleryOnHold,galleryReady } from "./components/gallery.js";

let ready = document.querySelector("#ready");
let onhold = document.querySelector(".onhold");
let input__search = document.querySelector("#input__search");
let main_section = document.querySelector(".main_section")


addEventListener("DOMContentLoaded", async () => {
    let infoReady = await getAllready();
    console.log(infoReady)
    
    ready.innerHTML = await galleryReady(infoReady);
    
    let infoHold = await getAllOnHold();
    console.log(infoHold)

    onhold.innerHTML = await galleryOnHold(infoHold);

    
    input__search.addEventListener("change", async e => {
        const task = e.target.value; 

        if (task.trim() !== "") { // Verifica que el valor no esté vacío
        
            const todoData = {
                    task: task,
                    status: "ready"
                };
        
            try {
                    
                const response = await AddToDo(todoData);
                alert('Tarea agregada:', response);

                
        
                main_section.innerHTML = await galleryReady(response); 
                    
            } catch (error) {
                console.error('Error al agregar tarea:', error);
                    
            }

            setTimeout (() =>{
                location.reload();
            },100);
        }
    });

})




