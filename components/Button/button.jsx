import styled from "styled-components";
import { Typography } from "../Typography/Typography";
const ButtonDiv = styled.button`
padding:1rem 5rem;
border: 2px #7E6DE7 solid;
z-index:400;
background-color:#FFFFFF;
position:${props => props.position || "relative"};
top:${props => props.top || ""};
right:${props => props.right || ""};
border-radius:1rem;
width:${props => props.width || "auto"}
display:flex;
justify-content:justify-content;
align-items:center;
transition: all .1s ease-in-out;
box-shadow: 8px 8px 0px #7E6DE7,
8px 8px 0px 1px #7CA1FF;
max-height:55px;
outline: none;
&:active {
    transform: translate(8px, 8px);
    box-shadow: 0px 0px 0px #7E6DE7;
  }
`
export default function Button({
    btnText,
    onClick = () => { },
    bx,
    position,
    right,
    top,
    width,
}
) {
    return (
        <ButtonDiv onClick={onClick} bx={bx} position={position} right={right} top={top} width={width}>
            <Typography text={btnText} weight={"bold"} borderLeft={"none"} textAlign={"center"}/>
        </ButtonDiv>
    )
}