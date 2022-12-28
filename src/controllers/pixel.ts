import { activeTool, board_pixels , board } from "./board";
import { pencilColor } from "./color-picker";
import { eraserColor } from "./eraser";

export function parsePixel(e: React.MouseEvent | MouseEvent){
    const pixelPosition = getPixelPosition(e);
    const element = createPixelElt(pixelPosition);
    addPixelEltToBoard(element);
    addPixelToBoardArray(pixelPosition);
}

export function createPixelElt(pixel_position:number[]){
    let elt = document.createElement("div") as HTMLElement;
    elt.classList.add("pixel");
    elt.classList.add("pixel-"+pixel_position[0]+"-"+pixel_position[1]);
    elt.style.background = `#${getCurrentColor()}`;
    elt.style.left = pixel_position[0]+"px";
    elt.style.top = pixel_position[1]+"px";
    return elt;
}

function changePixelColor(pixel_position:number[]){
    let elt = document.querySelector(".pixel-"+pixel_position[0]+"-"+pixel_position[1]) as HTMLElement
    elt.style.background = pencilColor;
}

function addPixelEltToBoard(elt:HTMLElement){
    board.appendChild(elt);
}

function addPixelToBoardArray(pixel_position:number[]){
    board_pixels[pixel_position[1]][pixel_position[0]]= pencilColor;
}

export function getPixelPosition(e: React.MouseEvent | MouseEvent):number[]{
    let pixel_pos_y = e.pageY-board.offsetTop;
    let pixel_pos_x = e.pageX;
    return [pixel_pos_x,pixel_pos_y];
}

function getCurrentColor():string{
    if(activeTool===0){return pencilColor;}
    if(activeTool===1){return eraserColor;}
    return "FFFFFF";
}