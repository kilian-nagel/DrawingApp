import { render , screen , cleanup, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'
import Board from "../board";
import Drawbar from "../drawbar";
import { changeActiveTool , activeTool ,currentPixelSize, board_pixels, resetBoard, initBoardPixels } from "../../controllers/board";

afterEach(cleanup);

describe("board component",()=>{
    it("board is in the document",()=>{
        render(<Board/>);
        render.createSn
        const board = screen.getByTestId("board");
        expect(board).toBeInTheDocument(); 
    })
    it("board renders correctly",()=>{
        renderer
    })
})

describe("board controllers",()=>{
    describe("changeActiveTool function",()=>{
        it("active tool should be initialized at 0",()=>{
            expect(activeTool).toBe(0);
        })
        it("should change active tool when called",()=>{
            changeActiveTool(10);
            expect(activeTool).toBe(10);
            changeActiveTool(1);
            expect(activeTool).toBe(1);
            changeActiveTool(1000000000000);
            expect(activeTool).toBe(1000000000000);
        })
        it("should not change active tool if the parameter is not a positive number or a whole number",()=>{
            let tool = activeTool;
            changeActiveTool(-10);
            expect(activeTool).toBeGreaterThanOrEqual(0);
            expect(activeTool).toBe(tool)
            tool = activeTool;
            changeActiveTool(-1);
            expect(activeTool).toBeGreaterThanOrEqual(0);
            expect(activeTool).toBe(tool);
            tool = activeTool;
            changeActiveTool(-1.67);
            expect(activeTool).toBeGreaterThanOrEqual(0);
            expect(activeTool).toBe(tool);
            tool = activeTool;
            changeActiveTool(10.8);
            expect(activeTool).toBeGreaterThanOrEqual(0);
            expect(activeTool).toBe(tool);
        });
    });
    describe("ChangePixelSize function",()=>{
        it("currentPixelSize initialized to 30",()=>{
            render(<Board></Board>);
            expect(currentPixelSize).toBe(30);
        });
        it("Change pixel size when dropdown option is clicked",()=>{
            render(<Drawbar></Drawbar>);
            const select = screen.getByTestId("size-select");
            fireEvent.change(select,{target:{value:"4"}});
            expect(currentPixelSize).toBe(4);
        })
    })
    describe("ResetBoard function",()=>{
        it("initialize all values correctly",()=>{
            render(<Board></Board>);
            
            const board = screen.getByTestId("board");
            board.innerHTML="hello";
            changeActiveTool(2);

            resetBoard();
            expect(activeTool).toBe(0);
            expect(board.innerHTML="");
        })
    })
    describe("InitBoardPixels function",()=>{
        it("board_pixels array is correctly initialized",()=>{
            render(<Board></Board>);
            initBoardPixels();
            for(let i=0;i<board_pixels.length;i++){
                for(let y=0;y<board_pixels.length;y++){
                    expect(board_pixels[i][y]).toBe("FFFFFF");
                }
            }
        })
    })
})