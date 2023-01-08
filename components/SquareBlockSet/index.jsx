import { Spacer } from "../Spacer/Spacer";
import { SquareBlock } from "../SquareBlock";
import { Typography } from "../Typography/Typography";
import { Flex } from "../Flex";

export function SquareBlockSet() {
       {
              return(
                     <Flex dir = 'row'>
                            <SquareBlock>
                                   <Flex align = 'flex-end'>
                                          <Typography weight = '500' lineHeight = '0' text = '$120K'/>
                                          <Typography weight = '500' lineHeight = '0' text = 'PER'/>
                                          <Typography weight = '500' lineHeight = '0' text = 'YEAR'/>
                                          <Spacer size = {10}/>
                                          <Typography size = '.75rem'weight = '300' lineHeight = '0' text = 'INCOME NEEDED'/>
                                          <Typography size = '.75rem'weight = '300' lineHeight = '0' text = 'TO AFFORD'/>
                                   </Flex>                            
                            </SquareBlock>
                            <Spacer size = {25}/>
                            <SquareBlock>
                            <Flex align = 'flex-end'>
                                   <Typography weight = '500' lineHeight = '0' text = '64%'/>
                                   <Spacer size = {10}/>
                                   <Typography size = '.5rem'weight = '300' lineHeight = '0' text = 'of Vancouverites own'/>
                            </Flex>                            
                            </SquareBlock>
                     </Flex>

              );
       }
}