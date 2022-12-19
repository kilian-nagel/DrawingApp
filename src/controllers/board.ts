import { pencilColor } from "./color-picker";

console.log("hello");

let board_pixels:string[][] = [];
let board:HTMLElement;

export function initBoardPixels(){
    board = document.getElementById("board") as HTMLElement;
    console.log(board.clientHeight);
    for(let i=0;i<board.clientHeight;i++){
        board_pixels.push([]);
        for(let y=0;y<board.clientWidth;y++){
            board_pixels[board_pixels.length-1].push("FFFFFF");
        }
    }
    console.log(board_pixels);
    
}

export function parsePixel(e: React.MouseEvent){
    const pixelPosition = getPixelPosition(e);
    const pixel_element = getPixelEltOrCreatePixelElt(pixelPosition);
    console.log(pixelPosition);
    if(isPixelOnBoard(pixelPosition)){
        changePixelColor(pixelPosition);
    } else {
        createPixelElt(pixelPosition);
    }  
}

function getPixelPosition(e: React.MouseEvent){
    let pixel_pos_x = Math.abs(e.currentTarget.clientLeft-board.clientLeft);
    let pixel_pos_y = e.currentTarget.clientHeight - board.clientTop;
    return [pixel_pos_x,pixel_pos_y];
}

function getPixelEltOrCreatePixelElt(pixel_position:number[]){
    if(isPixelOnBoard(pixel_position)){
        return document.querySelector(""+pixel_position[0]+"-"+pixel_position[1]) as HTMLElement
    } else {
        let elt = document.createElement("div");
        elt.classList.add(""+pixel_position[0]+"-"+pixel_position[1]);
    }
}

function createPixelElt(pixel_position:number[]){
    let elt = document.createElement("div") as HTMLElement;
    elt.classList.add(""+pixel_position[0]+"-"+pixel_position[1]);
    elt.style.background = pencilColor;
    document.appendChild(elt);
    board_pixels[pixel_position[1]][pixel_position[0]]= pencilColor;
}

function changePixelColor(pixel_position:number[]){
    let elt = document.querySelector(""+pixel_position[0]+"-"+pixel_position[1]) as HTMLElement
    elt.style.background = pencilColor;
}

function isPixelOnBoard(pixel_position:number[]){
    let pixel_element = document.querySelector(""+pixel_position[0]+"-"+pixel_position[1]) as HTMLElement;
    return document.body.contains(pixel_element)
}
export {};