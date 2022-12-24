
import React from "react";
import {changeActiveTool, parsePixel} from "./board";

const board = document.getElementById("#board") as HTMLElement;
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
        let interval = setInterval(()=>{
            console.log('hi');
            parsePixel(e);
            if(!isMouseDown){
                clearInterval(interval);}
        },50);
    }
}

function startMouseEventTracker(){
    board.addEventListener('mousemove',(e)=>handleMouseMove(e));
}

function endMouseEventTracker(){
    board.removeEventListener('mousemove',handleMouseMove);
}

function handleMouseMove(e:MouseEvent){
    currentMouseEvent = e;
}