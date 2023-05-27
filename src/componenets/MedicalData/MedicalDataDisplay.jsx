import { createStyles, Container, Title, Text, Button, rem } from '@mantine/core';
import { useStateContext } from '../../contexts/ContextProvider';
import CardDataDis from './CardDataDis';
import CardData from './CardData';

export default function MedicalDataDisplay(props){
    return(
      <div>
        <CardData/>
      </div>  
    );
}