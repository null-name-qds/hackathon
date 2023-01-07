import styled from "styled-components";
const InputDiv = styled.select`
border: 1px #7E6DE7 solid;
background-color:#FFFFFF;
border-radius:.5rem;
max-width:50px;
padding:.5rem 1.6rem;
`
export default function Input({
    values,
}
) {
    console.log(values)
    return (
        
        <InputDiv>
            {values.map((value) => {
               return <option value={value} key={value}>{value}</option>
            })}
        </InputDiv>
    )
}