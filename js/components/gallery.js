export const galleryReady = async (infoReady) => {
    let plantilla = "";

    for (let i = 0; i < infoReady.length; i++){
        plantilla += /*html*/`
        <div id= "main_section_ready"class="origin">
            <span>${infoReady[i].task}</span>
            <div class="imagen">
                <img src="./storage/Img/check.webp" alt="">
                <img src="./storage/Img/trash.jpg" alt="">
            </div>
        </div>`;
    }
    return plantilla
};

export const galleryOnHold = async (infoHold) => {
    let plantilla = "" ;

    for (let i = 0 ; i < infoHold.length; i++){
        plantilla += /*html*/ `
        <div class="hold">
            <del>${infoHold[i].task}</del>
            <div class="imagen">
                <img src="./storage/Img/check.webp" alt="">
                <img src="./storage/Img/trash.jpg" alt="">
            </div>
        </div>`;
    }
    return plantilla
};
