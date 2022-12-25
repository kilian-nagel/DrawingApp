import React from "react";
import { parsePixel } from "./board";
import { pencilColor, setPencilColor } from "./color-picker";

let eraser_color = "FFFFFF";

export function handleEraserClick(e:React.MouseEvent){
    // Store the pencil_color to be able to go draw with the previous color once we're done using the eraser.
    const old_pencil_color = pencilColor;
    setPencilColor(eraser_color);
    parsePixel(e);
    setPencilColor(old_pencil_color);
}