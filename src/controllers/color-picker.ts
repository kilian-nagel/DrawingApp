
import React from "react";

export let pencilColor:string = "000000";

export function handleColorPick(e: React.ChangeEvent<HTMLInputElement>){
    setPencilColor(e.currentTarget.value);
}

function setPencilColor(color:string){
    pencilColor = parsePencilColor(color);
}

function parsePencilColor(color:string):string{
    let tmp = color;
    tmp.trim();
    // if color is under the format #FFFFFF , then the hastag is removed of the string.
    if(tmp.length >= 2 && tmp[0]=="#"){
        tmp = tmp.substring(1);
    }
    return tmp;
}