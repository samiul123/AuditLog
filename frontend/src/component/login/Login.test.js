import {shallow} from "enzyme";
import Login from "./Login";
import {TextField} from "@mui/material";

describe('Login', function () {
    it('should render Textfield', function () {
        const wrapper = shallow(<Login/>)
        expect(wrapper.containsMatchingElement(<TextField/>)).toEqual(true)
    });
});