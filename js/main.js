import {getAllOnHold,getAllready,AddToDo,deleteTask,Update} from "../js/module/crud.js"
import { galleryOnHold,galleryReady } from "./components/gallery.js";

let ready = document.querySelector("#ready");
let onhold = document.querySelector(".onhold");
let input__search = document.querySelector("#input__search");
let main_section = document.querySelector(".main_section")
let space__index1 = document.querySelector(".list")


addEventListener("DOMContentLoaded", async () => {
    let infoReady = await getAllready();
    
    ready.innerHTML = await galleryReady(infoReady);
    
    let infoHold = await getAllOnHold();

    onhold.innerHTML = await galleryOnHold(infoHold);

    

    //agregar
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


    
    
    //eliminar
    document.querySelectorAll("#trash").forEach(basuraBtn => {
        basuraBtn.addEventListener("click", async (e) => {
            let dataId = e.target.dataset.id;
            
            await deleteTask(dataId);
            // console.log("eliminado")
            await getAllOnHold();
            e.target.parentElement.parentElement.remove();
            
            setTimeout(() => {
                location.reload();
            }, 10); 
        })
    });
})



