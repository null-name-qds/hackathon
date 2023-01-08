import { Spacer } from "../Spacer/Spacer";
import { SquareBlock } from "../SquareBlock";
import { Typography } from "../Typography/Typography";
import { Flex } from "../Flex";
import { ProgressCircle } from "../ProgressCircle";
import styled from "styled-components";

const RelativeParent = styled.div`
  position: relative;
`;

export function SquareBlockSet() {
  {
    return (
      <Flex dir="row">
        <SquareBlock>
          <Flex align="flex-end">
            <Typography 
              weight="600" 
              lineHeight="0" 
              text="$434k" 
              size="1.35rem"/>
            <Typography 
              size="1.35rem" 
              weight="600" 
              lineHeight="0" 
              text="PER" />
            <Typography 
              size="1.35rem" 
              weight="600" 
              lineHeight="0" 
              text="YEAR" />
            <Spacer size={10} />
            <Typography
              size=".9rem"
              weight="500"
              lineHeight="0"
              text="INCOME NEEDED"
            />
            <Typography
              size=".9rem"
              weight="500"
              lineHeight="0"
              text="TO AFFORD A PLACE"
            />
          </Flex>
        </SquareBlock>
        <Spacer size={25} />
        <SquareBlock padding='0px 10px'>
          <RelativeParent>
            <Typography
                size="1.8rem"
                weight="600"
                lineHeight="0"
                text="64%"
                color = '#2e1e8e'
                borderLeft = 'none'
                style = {{position: 'absolute', top: '43px',left:'-24px'}}
              />
          </RelativeParent>
          <Flex>
            <ProgressCircle/>
            <Spacer size={5} />
            <Typography
              text="OF VANCOUVERITES OWN HOMES"
              size="0.6rem"
              weight="400"
              textAlign="right"
            />
          </Flex>
        </SquareBlock>
      </Flex>
    );
  }
}
