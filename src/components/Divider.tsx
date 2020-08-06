import styled from "styled-components";
import {ThemeInnerModel} from "../models/theme.model";

const Divider = styled.div<{noMarginLastChild?: boolean}>`
width: 100%;
height: 1px;
background-color: ${({theme}: ThemeInnerModel) => theme.colorWhite};
margin: 20px 0;
${({noMarginLastChild}) => noMarginLastChild ? ({
    marginBottom: 0,
}) : null

}

`

export default Divider