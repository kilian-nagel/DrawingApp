import { activeTool, board_pixels , board, currentPixelSize } from "./board";
import { pencilColor } from "./color-picker";
import { eraserColor } from "./eraser";

export function parsePixel(e: React.MouseEvent | MouseEvent){
    const clickPosition = getClickPosition(e);
    const pixelElement = createPixelElement(clickPosition);
    addPixelEltToBoard(pixelElement);
    addPixelToBoardArray(clickPosition);
}

function createPixelElement(position:number[]){
    let elt = document.createElement("div") as HTMLElement;
    elt.classList.add("pixel");
    elt.classList.add("pixel-"+position[0]+"-"+position[1]);
    elt.style.background = `#${getCurrentColor()}`;
    elt.style.width = currentPixelSize + "px";
    elt.style.height = currentPixelSize + "px";
    elt.style.left = position[0]+"px";
    elt.style.top = position[1]+"px";
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

function getClickPosition(e: React.MouseEvent | MouseEvent):number[]{
    let y = e.pageY-board.offsetTop;
    let x = e.pageX;
    return [x,y];
}

function getCurrentColor():string{
    if(activeTool===0){return pencilColor;}
    if(activeTool===1){return eraserColor;}
    return "FFFFFF";
}