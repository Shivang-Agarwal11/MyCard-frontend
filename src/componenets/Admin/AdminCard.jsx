import { Button, Paper, Text, Group, CloseButton } from '@mantine/core';
import { useState } from 'react';
import OrganizationDetails from './OrganizationDetails';
import { useStateContext } from '../../contexts/ContextProvider';

export default function AdminCard(props) {
  const [showDetails,setshowDetails]=useState("false");
  const [storeId,setstoreId]=useState();
  const { orgDetails }=useStateContext()
  const items=props.items
  const showData=(id)=>{
    setstoreId(id)
    setshowDetails("true")
    console.log(id)
  } 
  const closeData=()=>{
    setshowDetails("false")
  }
  if(showDetails=="true"){
    return(
      <OrganizationDetails id={storeId} closeData={closeData}/>
    )
  }
  return (
    <div>
      {items.map((item)=>
    <Paper withBorder p="lg" radius="md" shadow="md">
      <Group position="apart" mb="xs">
        <Text fz="lg" fw={900}>
        {item.name}
        </Text>
      </Group>
      <Text c="#228BE6" fz="md">
        <b>Email:</b> {item.email}
      </Text>
      <Text c="#228BE6" fz="md">
        <b>Type:</b> {item.type}
      </Text>
      <Group position="right" mt="md">
        <Button variant="filled" size="md" onClick={()=>{showData(item._id)}}>
          View Organization Details
        </Button>
      </Group>
    </Paper>
      )}
    </div>
  );
}