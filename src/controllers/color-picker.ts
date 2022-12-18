import { dblClick } from "@testing-library/user-event/dist/click";
import React from "react";

export let pencilColor:string = "abcdef";

export function handleColorPick(e: React.ChangeEvent<HTMLInputElement>){
    setPencilColor(e.currentTarget.value);
    setInputColor();
}

function setPencilColor(color:string){
    pencilColor = color;
}

function setInputColor(){
    console.log(pencilColor);
    (document.querySelector(".color-picker") as HTMLInputElement).value = pencilColor;
}