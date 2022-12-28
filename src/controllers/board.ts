import { pencilColor } from "./color-picker";
import { handlePencilClickEvent } from "./pencil";
import { eraserColor, handleEraserClickEvent } from "./eraser";
import { getPixelPosition } from "./pixel";
import React from "react";

export let activeTool = 0;
export let board_pixels:string[][] = [];
export let board:HTMLElement;

/* Click event redirection
=============== */

export function changeActiveTool(n:number){
    activeTool = n;
}

/* When a click event is fired on the board , 
the function determines wich tool has to be activated 
( pencil , eraser...) */
export function redirectClickEvent(event:React.MouseEvent,isMouseDown:boolean){
    if(activeTool===0){handlePencilClickEvent(event,isMouseDown);}
    else if(activeTool===1){handleEraserClickEvent(event,isMouseDown);}
}

export function initBoardPixels(){
    board = document.getElementById("board") as HTMLElement;
    for(let i=0;i<board.clientHeight;i++){
        board_pixels.push([]);
        for(let y=0;y<board.clientWidth;y++){
            board_pixels[board_pixels.length-1].push("FFFFFF");
        }
    }
    
}

