import { handlePencilClickEvent } from "./pencil";
import { handleEraserClickEvent } from "./eraser";
import React from "react";

export let activeTool = 0;
export let currentPixelSize = 30;
export let board_pixels:string[][] = [];
export let board:HTMLElement;

export function changeActiveTool(n:number){
    if(n>=0 && n%1==0){activeTool = n;}
}

export function changeCurrentPixelSize(e:React.ChangeEvent<HTMLSelectElement>){
    currentPixelSize = parseInt(e.currentTarget.value);
}

export function resetBoard(){
    initBoardPixels();
    board.innerHTML = "";
    activeTool = 0;
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
    board_pixels = [];
    for(let i=0;i<board.clientHeight;i++){
        board_pixels.push([]);
        for(let y=0;y<board.clientWidth;y++){
            board_pixels[board_pixels.length-1].push("FFFFFF");
        }
    }
    
}

