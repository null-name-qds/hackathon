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
  outline:none;
  transition: all 100ms ease-in-out;
  box-shadow: ${props => props.bx ? "0px": "8px 8px 0px #7E6DE7"};
  transform: ${props=> props.transform ? "translate(8px, 8px)" : undefined};
`

const Img = styled.img`
  width: 43px;
  height: 43px;
`

export default function RadioBtn({
  name,
  img,
  onClick = () => {},
  bx,
  transform,
}) {


  return (<>
    <Button onClick={onClick} bx={bx} transform={transform}>
      <Img src={img}/>
      <Typography text={name} borderLeft="none"></Typography>
    </Button>
  </>
  )
}

