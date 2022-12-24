
import React from "react";

export let pencilColor:string = "000000";

export function handleColorPick(e: React.ChangeEvent<HTMLInputElement>){
    console.log(e.currentTarget.value);
    setPencilColor(e.currentTarget.value);
    setInputColor();
}

function parsePencilColor(color:string):string{
    let tmp = color;
    tmp.trim();
    if(tmp.length >= 2 && tmp[0]=="#"){
        tmp = tmp.substring(1);
    }
    console.log(color);
    return tmp;
}

export function setPencilColor(color:string){
    pencilColor = parsePencilColor(color);
}

// Inutile
function setInputColor(){
    console.log(pencilColor);
    (document.querySelector(".color-picker") as HTMLInputElement).value = pencilColor;
}