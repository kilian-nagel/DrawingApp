import { render , screen , cleanup, fireEvent} from "@testing-library/react";
import renderer from "react-test-renderer";
import '@testing-library/jest-dom';
import Drawbar from "../drawbar";
import { handleColorPick, parsePencilColor, pencilColor, setPencilColor } from "../../controllers/color-picker";

afterEach(cleanup);

describe("color-picker HTMLelement",()=>{
    it("is in the document",()=>{
        render(<Drawbar/>);
        const colorPicker = screen.getByTestId("color-picker");
        expect(colorPicker).toBeInTheDocument();
    });
    it("renders correctly",()=>{
        const tree = renderer.create(<input className='color-picker' data-testid="color-picker" type="color" id="favcolor" onInput={handleColorPick} name="favcolor" value={pencilColor}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
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
        fireEvent.change(colorPicker,{target:{value:"BBBBBB"}});
        expect(pencilColor).toBe("BBBBBB");
    })
})