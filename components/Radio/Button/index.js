import styled from 'styled-components'
import { Typography } from '../../Typography/Typography'
const Button = styled.button`
  display: flex;
  width: 95px;
  height: 94px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid;
  border-color: #7E6DE7;
  border-radius: 7.4px;
  box-shadow: 8px 8px 0px #7E6DE7;
  outline:none;
  transition: all 100ms ease-in-out;
    &:active{
    transform: translate(12px, 12px);
    box-shadow: 0px 0px 0px #7E6DE7;
  }
`

const Img = styled.img`
  width: 43px;
  height: 43px;
`

export default function RadioBtn({
  name,
  img,
  onClick = () => {}
}) {


  return (<>
    <Button onClick={onClick}>
      <Img src={img}/>
      <Typography text={name} borderLeft="none"></Typography>
    </Button>
  </>
  )
}

