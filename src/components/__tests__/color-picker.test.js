import { render , screen , cleanup, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import Drawbar from "../drawbar";
import { parsePencilColor, pencilColor, setPencilColor } from "../../controllers/color-picker";

afterEach(cleanup);

describe("color-picker HTMLelement",()=>{
    it("color-picker is in the document",()=>{
        render(<Drawbar/>);
        const colorPicker = screen.getByTestId("color-picker");
        expect(colorPicker).toBeInTheDocument();
    })
})

describe("color-picker controller",()=>{
    it("pencil color is correctly initialized",()=>{
        expect(pencilColor).toBe("000000");
    })
    it("setPencilColor set pencil color",()=>{
        expect(pencilColor).toBe("000000");
        setPencilColor("AAAAAA");
        expect(pencilColor).toBe("AAAAAA");
    })
    it("parsePencilColor parses color",()=>{
        expect(parsePencilColor("#A")).toBe("A");
        expect(parsePencilColor("#ABCD")).toBe("ABCD");
        expect(parsePencilColor("#")).toBe("#");
    })
    it("handleColorPick handle mouse change event when it is fired",()=>{
        render(<Drawbar/>);
        const colorPicker = screen.getByTestId("color-picker");
        fireEvent.change(colorPicker,{target:{value:"111111"}});
        expect(pencilColor).toBe("BBBBBB");
    })
})