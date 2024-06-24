export const getAllready = async () => {
    const url = "https://6675edc6a8d2b4d072f1ee3d.mockapi.io/ToDoList";
    const list = { method: "GET" };

    let res = await fetch(url, list);
    let data = await res.json();

    
    let filteredData = data.filter(item => item.status === "ready");
    let definitiveData = filteredData.reverse()
    return definitiveData;
};

export const getAllOnHold = async () => {
    const url = "https://6675edc6a8d2b4d072f1ee3d.mockapi.io/ToDoList";
    const list = { method: "GET" };

    let res = await fetch(url, list);
    let data = await res.json();

    
    let filteredData = data.filter(item => item.status === "On hold");
    let definitiveData = filteredData.reverse()
    return definitiveData;
};

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

// PUT
export const Update = async (id, status) => {
    const url = `https://6675edc6a8d2b4d072f1ee3d.mockapi.io/ToDoList/${id}`;
    const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify( {status} ),
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error changing status to ready:", error);
    }
};


// DELETE
export const deleteTask = async(id) => {
    const url = `https://6675edc6a8d2b4d072f1ee3d.mockapi.io/ToDoList/${id}`;
    const options = { 
        method: "DELETE",
        headers: {"content-type": "application/json"},
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}



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