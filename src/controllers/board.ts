
let board_pixels:String[][] = [];
let board = document.getElementById("#board") as HTMLElement;

function initBoardPixels(){
    for(let i=0;i<board?.clientHeight;i++){
        board_pixels.push([]);
        for(let y=0;y<board.clientWidth;y++){
            board_pixels[board_pixels.length-1].push("FFFFFF");
        }
    }
}
export {};