export const galleryReady = async (infoReady) => {
    let plantilla = "";

    for (let i = 0; i < infoReady.length; i++){
        plantilla += /*html*/`
        <div id= "main_section_ready"class="origin">
            <span>${infoReady[i].task}</span>
            <div class="imagen">
                <img id ="check"src="./storage/Img/check.webp" alt="" data-id="${infoReady[i].id}" >
                <img id ="trash"src="./storage/Img/trash.jpg" alt="" data-id="${infoReady[i].id}">
            </div>
        </div>`;
    }
    return plantilla
};

export const galleryOnHold = async (infoHold) => {
    let plantilla = "" ;

    for (let i = 0; i < infoHold.length; i++){
        plantilla += /*html*/ `
        <div class="hold">
            <del>${infoHold[i].task}</del>
            <div class="imagen">
                <img id="check"src="./storage/Img/check.webp" alt="check" data-id="${infoHold[i].id}">
                <img id="trash"src="./storage/Img/trash.jpg" alt="trash" data-id="${infoHold[i].id}">
            </div>
        </div>`;
    }
    return plantilla;
};

//hacer condicional que validesi es ready talhtml y si no el otro
