import styled from "styled-components";
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
gap:25px;
`
const InfoHeader = styled.p`
color: #7E6DE7;
font-weight: 600;
font-size: 1.3rem;
text-align: right;
`
const InfoPara = styled.p`
align-self:center;
text-align:right;
color: #7E6DE7;
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
                <InfoHeader>
                    {header}
                </InfoHeader>
                <InfoPara>
                    {subhead}
                </InfoPara>
            </InfoText>
        </InfoDiv>
    )
}