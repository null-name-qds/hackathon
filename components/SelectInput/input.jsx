import styled from "styled-components";
const InputDiv = styled.select`
border: 1px #7E6DE7 solid;
background-color:#FFFFFF;
border-radius:.5rem;
max-width:50px;
padding:.5rem 2.8rem .5rem 1rem;
color: #7E6DE7;
    &:focus{
       outline:none; 
    }
`
export default function Input({
    values,
    onChange=()=>{},
}
) {
    return (     
        <InputDiv onChange={onChange}>
            {values.map((value) => {
               return <option value={value} key={value}>{value}</option>
            })}
        </InputDiv>
    )
}