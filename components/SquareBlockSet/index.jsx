import { Spacer } from "../Spacer/Spacer";
import { SquareBlock } from "../SquareBlock";
import { Typography } from "../Typography/Typography";
import { Flex } from "../Flex";

export function SquareBlockSet() {
  {
    return (
      <Flex dir="row">
        <SquareBlock>
          <Flex align="flex-end">
            <Typography weight="700" lineHeight="0" text="$120K" />
            <Typography weight="600" lineHeight="0" text="PER" />
            <Typography weight="600" lineHeight="0" text="YEAR" />
            <Spacer size={10} />
            <Typography
              size="0.8rem"
              weight="500"
              lineHeight="0"
              text="INCOME NEEDED"
            />
            <Typography
              size="0.8rem"
              weight="500"
              lineHeight="0"
              text="TO AFFORD"
            />
          </Flex>
        </SquareBlock>
        <Spacer size={25} />
        <SquareBlock padding='0px 10px'>
          <Flex align="flex-end">
            <Typography weight="700" lineHeight="0" text="64%" />
            <Spacer size={10} />
            <Typography
              text="of Vancouverites own"
              size="1rem"
              weight="400"
              textAlign="right"
            />
          </Flex>
        </SquareBlock>
      </Flex>
    );
  }
}
