
import React from "react";
import {changeActiveTool, parsePixel} from "./board";

let currentMouseEvent:MouseEvent;

export function handlePencilClick(e: React.MouseEvent){
    parsePixel(e);
}

let isMouseDown = false;
export function setMouseState(bool:boolean){
    isMouseDown = bool;
}

export function handlePencilHoldEvent(bool:boolean,e:React.MouseEvent){
    setMouseState(bool)
    if(isMouseDown){
        startMouseEventTracker();
        let interval = setInterval(()=>{
            console.log('hi');
            parsePixel(currentMouseEvent);
            if(!isMouseDown){
                clearInterval(interval);}
        },1);
    } else {
        endMouseEventTracker();
    }
}

function startMouseEventTracker(){
    const board = document.getElementById("board") as HTMLElement;
console.log(board);
    board.addEventListener('mousemove',(e)=>handleMouseMove(e));
}

function endMouseEventTracker(){
    const board = document.getElementById("board") as HTMLElement;
console.log(board);
    board.removeEventListener('mousemove',handleMouseMove);
}

function handleMouseMove(e:MouseEvent){
    currentMouseEvent = e;
}