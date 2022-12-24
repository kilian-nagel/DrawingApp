import { pencilColor } from "./color-picker";
import { handlePencilClick } from "./pencil";
import { handleEraserClick } from "./eraser";
import React from "react";

let board_pixels:string[][] = [];
let board:HTMLElement;
export let activeTool = 0;

/* Click event redirection
=============== */

export function changeActiveTool(n:number){
    console.log(activeTool);
    activeTool = n;
}

/* When a click event is fired on the board , 
the function determines wich tool has to be activated 
( pencil , eraser...) */
export function redirectClickEvent(e:React.MouseEvent){
    if(activeTool==0){handlePencilClick(e);}
    else if(activeTool==1){handleEraserClick(e);}
}


/* Board stuff 
================ */

export function initBoardPixels(){
    board = document.getElementById("board") as HTMLElement;
    for(let i=0;i<board.clientHeight;i++){
        board_pixels.push([]);
        for(let y=0;y<board.clientWidth;y++){
            board_pixels[board_pixels.length-1].push("FFFFFF");
        }
    }
    
}

/* Pixel stuff
=============== */

export function parsePixel(e: React.MouseEvent){
    const pixelPosition = getPixelPosition(e);
    createPixelElt(pixelPosition);
}

function getPixelPosition(e: React.MouseEvent){
    let pixel_pos_y = e.pageY-board.offsetTop;
    let pixel_pos_x = e.pageX;
    return [pixel_pos_x,pixel_pos_y];
}

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