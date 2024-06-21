export const AddToDo = async (arg) => {
    let val = await validarAgregarTarea(arg);
    if (val) return val;

    let config = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(arg)
    };

    let res = await fetch("https://6675edc6a8d2b4d072f1ee3d.mockapi.io/ToDoList", config);
    let data = await res.json();
    return data;
};

export const deleteTask = async (arg) => {
    let val = await validarEliminarTarea(arg);
    if (val) return val;
    
    let config = {
        method: "DELETE",
    };

    let res = await fetch(`https://6675edc6a8d2b4d072f1ee3d.mockapi.io/ToDoList/${arg.id}`, config);
    let data = await res.json();
    return data;
};

// Validaciones
const validarAgregarTarea = async (act) => {
    if (typeof act.task !== "string" || act.task === undefined) {
        return { status: 406, message: "Los datos de la tarea no están llegando correctamente" };
    }
};

const validarEliminarTarea = async ({ id }) => {
    if (typeof id !== "string" || id === undefined) {
        return { status: 406, message: "El ID de la tarea no está llegando correctamente" };
    }
};