import { Container, Flex } from '@mantine/core';
import LongCard from '../Card/Card'
import { carddata } from '../Card/CardsData'
import FaqSimple from '../FAQ/FAQ';

export default function CenterContent() {
 

  return (
    <div>
    <Flex align="flex-start"
      direction="row"
      wrap="wrap">
    <Container my="lg" pl={0} ml="sm" mr="sm">
     <LongCard carddata={carddata.data}/>
    </Container>
    <Container mr="sm" ml="sm" pb="sm" mb="sm">
    
     <FaqSimple/>
     </Container>
    </Flex>
    </div>
  );
}