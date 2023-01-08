import styled from "styled-components";
import { Typography } from "../Typography/Typography";
const ButtonDiv = styled.button`
padding:1rem 5rem;
border: 2px #7E6DE7 solid;
background-color:#7E6DE7;
border-radius:.7rem;
display:flex;
justify-content:justify-content;
align-items:center;
max-height:55px;
max-width:350px;
outline: none;
align-self:center;
`
export default function DarkButton({
    btnText,
    onClick = () => { },
}
) {
    return (
        <ButtonDiv onClick={onClick}>
            <Typography text={btnText} weight={"700"} borderLeft={"none"} color={"white"}/>
        </ButtonDiv>
    )
}