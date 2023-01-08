import styled from "styled-components";
import { Typography } from "../Typography/Typography";
import { Spacer } from "../Spacer/Spacer";

const ButtonDiv = styled.button`
padding:${props => props.padding || "1rem 5rem"};
border: 2px #7E6DE7 solid;
z-index:${props => props.zIndex || "401"};
display:${props=>props.display || "block"};
background-color:#FFFFFF;
position:${props => props.position || "relative"};
top:${props => props.top || ""};
left:${props => props.left || ""};
width:${props => props.width || ""};
border-radius:1rem;
display:flex;
justify-content:center;
align-items:center;
transition: all 100ms ease-in-out;
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
    left,
    top,
    width,
    display,
    padding,
    icon,
    zIndex
}
) {
    return (
        <ButtonDiv onClick={onClick} bx={bx} position={position} left={left} top={top} width={width} display={display} padding={padding} zIndex={zIndex}>
            <Typography text={btnText} weight={"bold"} size={"1.3rem"} borderLeft={"none"} textAlign={"center"}/>
            {icon && <><Spacer axis={"horizontal"} size={25}/><img src={icon}/></>}
        </ButtonDiv>
    )
}