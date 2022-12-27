
import React from "react";
import { handlePencilClickEvent } from "./pencil";

export let eraserColor = "FFFFFF";

export function handleEraserClickEvent(e:React.MouseEvent,bool:boolean){
    handlePencilClickEvent(e,bool);
}