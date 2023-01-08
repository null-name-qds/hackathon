import styled from 'styled-components'

export const SquareBlock = styled.div`
  display: flex;
  min-width: 150px;
  min-height: 150px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid;
  border-color: #7E6DE7;
  border-radius: 7.4px;
  box-shadow: 8px 8px 0px #7E6DE7;
  padding: ${({ padding }) => padding || '0'};
`


