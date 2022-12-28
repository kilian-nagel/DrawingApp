
import React from "react";
import {parsePixel} from "./pixel";

let currentMouseEvent:MouseEvent;
let isMouseDown = false;

export function handlePencilClickEvent(e:React.MouseEvent,bool:boolean){
    setMouseState(bool);
    handleMouseMoveEventTracker();
}

function handleMouseMoveEventTracker(){
    if(isMouseDown){
        startMouseMoveEventTracker();
        let interval = setInterval(()=>{
            parsePixel(currentMouseEvent);
            if(!isMouseDown){clearInterval(interval);}
        },1);
    } else {
        endMouseMoveEventTracker();
    }
}

function setMouseState(bool:boolean){
    isMouseDown = bool;
}

function startMouseMoveEventTracker(){
    const board = document.getElementById("board") as HTMLElement;
    board.addEventListener('mousemove',(e)=>handleMouseMoveEvent(e));
}

function endMouseMoveEventTracker(){
    const board = document.getElementById("board") as HTMLElement;
    board.removeEventListener('mousemove',handleMouseMoveEvent);
}

function handleMouseMoveEvent(e:MouseEvent){
    currentMouseEvent = e;
}