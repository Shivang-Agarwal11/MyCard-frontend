import React from 'react';
import { Card, Text, Divider } from '@mantine/core';
import { useStateContext } from '../../contexts/ContextProvider';
import { CloseButton, Group } from '@mantine/core';
import { Select, TextInput, Button, Container, Paper, PasswordInput, Title } from '@mantine/core';
const OrganizationDetails = (props) => {
  const { orgDetails } = useStateContext()
  const id = props.id
  const dataOrg = orgDetails[id]
  const type=dataOrg.type
  const name = dataOrg.name
  const contactNumber=dataOrg.contactNumber
  const email = dataOrg.email
  const address = dataOrg.address.addressLine1 +" " + dataOrg.address.addressLine2 + " " +dataOrg.address.addressLine3
  const pincode = dataOrg.address.pincode
  const city=dataOrg.address.city
  const state=dataOrg.address.state
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
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
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
          <Button type="submit" mt="sm">
            Accept
          </Button>
          <Button type="submit" mt="sm">
            Reject
          </Button>
        </Group>
        
      </Paper>
    </Container>







  );
};

export default OrganizationDetails;