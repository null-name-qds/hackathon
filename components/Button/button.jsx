import styled from "styled-components";
const ButtonDiv = styled.button`
padding:1rem 5rem;
position:fixed;
border: 2px #7E6DE7 solid;
z-index:999;
background-color:#FFFFFF;
top:10%;
right:10%;
border-radius:1rem;
display:flex;
justify-content:justify-content;
align-items:center;
transition: all .1s ease-in-out;
box-shadow: 8px 6px 0px #7E6DE7,
8px 6px 0px 1px #7CA1FF;
max-height:55px;
&:hover {
    transform: translate(8px, 6px);
    box-shadow: 0px 0px 0px #7E6DE7;
  }
`
const ButtonHeader = styled.p`
color: #7E6DE7;
font-weight: 600;
`
export default function Button({
    header,
    onClick = () => { },
}
) {
    return (
        <ButtonDiv onClick={onClick}>
            <ButtonHeader>
                {header}
            </ButtonHeader>
        </ButtonDiv>
    )
}