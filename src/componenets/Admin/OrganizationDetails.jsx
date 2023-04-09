import React, { useEffect } from 'react';
import { Text} from '@mantine/core';
import { Badge } from '@mantine/core';
import { useStateContext } from '../../contexts/ContextProvider';
import { CloseButton, Group } from '@mantine/core';
import {  Button, Container, Paper,Title } from '@mantine/core';
import axios from 'axios';
import API_URL from '../../url';
const OrganizationDetails = (props) => {
  const { orgDetails } = useStateContext()
  const id = props.id
  const dataOrg = orgDetails[id]
  const type = dataOrg.type
  const name = dataOrg.name
  const gst=dataOrg.gst
  const contactNumber = dataOrg.contactNumber
  const email = dataOrg.email
  const address = dataOrg.address.addressLine1 + " " + dataOrg.address.addressLine2 + " " + dataOrg.address.addressLine3
  const pincode = dataOrg.address.pincode
  const city = dataOrg.address.city
  const state = dataOrg.address.state
  const params={
    "gstnum":gst
  }

  useEffect(()=>{
    axios.get(`${API_URL}/api/org/gst/validate`,params)
    .then((response)=>{
      console.log(response)
    },(error)=>{
      console.log(error)
    });
  },[])

  const validateOrg = () => {
    var params = { "id": props.id }
    const header = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
    axios.post(`${API_URL}/api/admin/org/validate`, params, header)
      .then((response) => {
        console.log(response)
        props.closeData()


      }, (error) => {
        console.log("Error")

      });
  }
  const rejectOrg = () => {
    var params = { "id": props.id }
    const header = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
    axios.post(`${API_URL}/api/admin/org/reject`, params, header)
      .then((response) => {
        // console.log(response)
        props.closeData()
      }, (error) => {
        console.log("Error")

      });
  }
  return (
    <Container size={520} my={40}>
      <Group position="center">
        <CloseButton title="Close popover" size="xl" iconSize={25} color='red' onClick={props.closeData} />
      </Group>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Organiation Details
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md" pt="sm">

        <Text align="left" size="lg" style={{ marginTop: '1rem' }}>
          <strong>Type: </strong>
          {type}
        </Text>
        <Text align="left" size="lg">
          <strong>Name: </strong>
          {name}
        </Text>

        <Text align="left" size="lg">
          <strong>Email: </strong>
          {email}
        </Text>
        <Text align="left" size="lg">
          <strong>Contact Number: </strong>
          {contactNumber}
        </Text>
        <Text align="left" size="lg">
          <strong>Address: </strong>
          {address}
        </Text>
        <Text align="left" size="lg">
          <strong>Pincode: </strong>
          {pincode}
        </Text>
        <Text align="left" size="lg">
          <strong>City: </strong>
          {city}
        </Text>
        <Text align="left" size="lg">
          <strong>State: </strong>
          {state}
        </Text>

        <Group position='left'>
          <Button type="submit" mt="sm" onClick={validateOrg}>
            Accept
          </Button>
          <Button type="submit" mt="sm" onClick={rejectOrg}>
            Reject
          </Button>
        </Group>

      </Paper>
    </Container>







  );
};

export default OrganizationDetails;