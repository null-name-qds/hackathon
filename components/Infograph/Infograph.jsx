import styled from "styled-components";
import { Typography } from "../Typography/Typography";
const InfoDiv = styled.div`
padding:1rem 1rem;
border: 2px #7E6DE7 solid;
background-color:#FFFFFF;
border-radius:1rem;
display:flex;
flex-direction:row;
box-shadow: 8px 6px 0px #7E6DE7,
8px 6px 0px 1px #7CA1FF;
max-height:90px;
min-width:290px;
gap:25px;
`
const InfoText = styled.div`
display:flex;
flex-direction:column;
align-self:end;
`
const Icon = styled.img`
`
export default function InfoGraph({
    header, subhead, icon
}
) {
    return (
        <InfoDiv>
            <Icon src={icon}/>
            <InfoText>
                <Typography text={header} textAlign={"right"} weight={"bold"}/>
                <Typography text={subhead} textAlign={"right"}/>
            </InfoText>
        </InfoDiv>
    )
}