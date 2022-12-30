
import { parse } from "path";
import React from "react";
import { board } from "./board";
import {parsePixel} from "./pixel";

let currentMouseEvent:MouseEvent;
let isMouseDown = false;

export function handlePencilClickEvent(e:React.MouseEvent,bool:boolean){
    setMouseState(bool);
    handleMouseMoveEventTracker();
}

function handleMouseMoveEventTracker(){
    if(isMouseDown){
        const board = document.getElementById("board") as HTMLElement;
        board.addEventListener('mousemove',handleMouseMoveEvent);
    } else {
        board.removeEventListener('mousemove',handleMouseMoveEvent);
    }
}

function setMouseState(bool:boolean){
    isMouseDown = bool;
}

function handleMouseMoveEvent(e:MouseEvent){
    parsePixel(e);
}