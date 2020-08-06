import styled from "styled-components";
import {BoldText} from "../styles/Typography";

const Table = styled.table`
width: 100%;
`

export const Tr = styled.tr`
font-family: 'Inter', sans-serif;
border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

export const Th = styled.th`
opacity: 0.5;
font-size: 10px;
font-weight: 500;
line-height: 1.6;
letter-spacing: 1.5px;
`

export const Td = styled.td`
${BoldText};
`


export default Table;
