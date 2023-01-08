import styled from "styled-components";
const InputDiv = styled.input`
border: 1px #7E6DE7 solid;
background-color:#FFFFFF;
border-radius:.5rem;
max-width:150px;
padding:.5rem 2.8rem .5rem 1rem;
color: #7E6DE7;
    &:focus{
       outline:none; 
    }
`
export default function Input({
    onChange=()=>{},
    value,
    type,
}
) {
    // console.log(values)
    return (
        
        <InputDiv onChange={onChange} type={type} value={value}/>
    )
}