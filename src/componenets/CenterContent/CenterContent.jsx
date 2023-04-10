import { Container, Flex } from '@mantine/core';
import LongCard from '../Card/Card'
import { carddata } from '../Card/CardsData'
import FaqSimple from '../FAQ/FAQ';

export default function CenterContent() {
 

  return (
    <div style={{ "display": "grid", "gridTemplateColumns": "50% 50%" }}>
     <LongCard carddata={carddata.data}/>
     <FaqSimple/>
    </div>
  );
}