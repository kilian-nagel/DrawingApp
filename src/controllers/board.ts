import { pencilColor } from "./color-picker";

let board_pixels:string[][] = [];
let board:HTMLElement;

export function initBoardPixels(){
    board = document.getElementById("board") as HTMLElement;
    for(let i=0;i<board.clientHeight;i++){
        board_pixels.push([]);
        for(let y=0;y<board.clientWidth;y++){
            board_pixels[board_pixels.length-1].push("FFFFFF");
        }
    }
    
}

export function parsePixel(e: React.MouseEvent){
    const pixelPosition = getPixelPosition(e);
    if(isPixelOnBoard(pixelPosition)){
        changePixelColor(pixelPosition);
    } else {
        createPixelElt(pixelPosition);
    }  
}

function getPixelPosition(e: React.MouseEvent){
    let pixel_pos_y = e.pageY-board.offsetTop;
    let pixel_pos_x = e.pageX;
    return [pixel_pos_x,pixel_pos_y];
}

/* function getPixelEltOrCreatePixelElt(pixel_position:number[]){
    if(isPixelOnBoard(pixel_position)){
        return document.querySelector(""+pixel_position[0]+"-"+pixel_position[1]) as HTMLElement
    } else {
        let elt = document.createElement("div");
        elt.classList.add(""+pixel_position[0]+"-"+pixel_position[1]);
    }
} */

function createPixelElt(pixel_position:number[]){
    let elt = document.createElement("div") as HTMLElement;
    elt.classList.add("pixel-"+pixel_position[0]+"-"+pixel_position[1]);
    elt.style.background = `#${pencilColor}`
    elt.style.position = "absolute";
    elt.style.left = pixel_position[0]+"px";
    elt.style.top = pixel_position[1]+"px";
    elt.style.width = "5px";
    elt.style.height = "5px";
    board.appendChild(elt);
    
    board_pixels[pixel_position[1]][pixel_position[0]]= pencilColor;
}

function changePixelColor(pixel_position:number[]){
    let elt = document.querySelector(".pixel-"+pixel_position[0]+"-"+pixel_position[1]) as HTMLElement
    elt.style.background = pencilColor;
}

function isPixelOnBoard(pixel_position:number[]){
    let pixel_element = document.querySelector(".pixel-"+pixel_position[0]+"-"+pixel_position[1]) as HTMLElement;
    return document.body.contains(pixel_element)
}
export {};