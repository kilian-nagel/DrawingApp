import { render , screen , cleanup} from "@testing-library/react";
import '@testing-library/jest-dom'
import Board from "../board";
import { changeActiveTool , activeTool } from "../../controllers/board";

describe("board component",()=>{
    test("board is in the document",()=>{
        render(<Board/>);
        const board = screen.getByTestId("board");
        expect(board).toBeInTheDocument(); 
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
        })
    })
})