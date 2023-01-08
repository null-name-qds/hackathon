import styled from "styled-components";

const InputDiv = styled.input`
border: 1px #7E6DE7 solid;
background-color:#FFFFFF;
border-radius:.5rem;
padding:1rem 2rem 1rem 2rem;
font-size:1.5rem;
color: #7E6DE7;
align-self:start;
box-shadow: 8px 8px 0px #7E6DE7;
    &:focus{
       outline:none; 
    }
    ::placeholder,
  ::-webkit-input-placeholder {
    color: #D7D7E7;
  }
`
export default function BigInput({
  onChange,
  value,
}
) {
  return (
    <InputDiv onChange={onChange} type="text" value={value} min="1" placeholder="$$$$$" />
  )
}