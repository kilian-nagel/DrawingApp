import { render , screen , cleanup, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import Drawbar from "../drawbar";

describe("eraser HTML Element",()=>{
    it("eraser is in the document",()=>{
        render(<Drawbar/>);
        const eraser = screen.getByTestId("eraser");
        expect(eraser).toBeInTheDocument();
    })
})