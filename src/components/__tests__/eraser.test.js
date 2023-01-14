import { render , screen , cleanup, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import Drawbar from "../drawbar";
import { eraserColor } from "../../controllers/eraser";
import { board_pixels, changeActiveTool , initBoardPixels} from "../../controllers/board";
import Board from "../board";

afterEach(cleanup);

describe("eraser HTML Element",()=>{
    it("eraser is in the document",()=>{
        render(<Drawbar/>);
        const eraser = screen.getByTestId("eraser");
        expect(eraser).toBeInTheDocument();
    })
})

describe("eraser controller",()=>{
    it("eraser color initialized at #FFFFFF",()=>{
        render(<Drawbar/>);
        expect(eraserColor).toBe("FFFFFF");
    })
    it("on click eraser should erase",()=>{
        render(<Board/>);
        changeActiveTool(1);
        initBoardPixels();

        board_pixels[120][100]="AFAFAF";
        const board = screen.getByTestId("board");
        fireEvent.click(board,{clientX:100,clientY:120});
        expect(board_pixels[120][100]).toBe("FFFFFF");
    })
})