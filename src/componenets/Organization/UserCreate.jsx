import React from 'react'

import { useForm } from '@mantine/form';
import { Select, TextInput, Button, Container, Paper, PasswordInput, Title, Group, NumberInput } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
// const axios = require("axios");
import axios, * as others from 'axios';
import { useState } from 'react';

function OrgCreateUser() {
  const [data,setData]=useState('')
  const navigate=useNavigate()
  const onOrgSignUp = (val) => {
    
    // alert("request")I
    
    var params = {
      "name": val.name,
      "contactNumber": Number(val.number),
      "email": val.email,
      "address": {
        "addressLine1": val.addressLine1,
        "addressLine2": val.addressLine2,
        "addressLine3": val.addressLine3,
        "city": val.city,
        "state": val.state,
        "pincode": Number(val.pincode)
      },
      "type": data,
      "username": val.username,
      "password": val.password
    }
        const headers = {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json"
        }
        axios
        .post("https://mycard.up.railway.app/api/org/create", params,headers)
        .then((response) => {
          console.log("Success")
          navigate('/request')
        }, (error) => {
          console.log("Error")
          
        });
  }


  const form = useForm({
    initialValues: { name: '', email: '', number: '', type:'',addressLine1: '', addressLine2: '', addressLine3: '', city: '', state: '', pincode: '', gst: '', password: '', confirmPassword: '', username: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      number: (value) => ((value.length != 10 || /^-?\d+$/.test(value) == false) ? 'Invalid Number' : null),
      pincode: (value) => ((/^-?\d+$/.test(value) == false) ? 'Invalid pincode' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });
  
  return (
    <Container size={520} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Start with Us!
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values)=>onOrgSignUp(values))}>
          <TextInput label="Organization Name" placeholder="Name" {...form.getInputProps('name')} required />
          <Select
            style={{ marginTop: 20, zIndex: 2 }}
            data={['Finance', 'Hospital', 'Educational', 'Judicial']}
            placeholder="Type"
            label="Your Organization Type"
            // classNames={classes}
            onChange={setData}
            required
          />
          <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} required />
          <TextInput
          
            mt="sm"
            label="Mobile Number"
            placeholder="Number"
            min={0}
            max={99}
            {...form.getInputProps('number')}
          />
          <TextInput label="Address Line 1" placeholder="Address" {...form.getInputProps('addressLine1')} required />
          <TextInput label="Address Line 2" placeholder="Address" {...form.getInputProps('addressLine2')} />
          <TextInput label="Address Line 3" placeholder="Address" {...form.getInputProps('addressLine3')} />
          <TextInput label="City" placeholder="City" {...form.getInputProps('city')} required />
          <TextInput label="State" placeholder="State" {...form.getInputProps('state')} required />
          <TextInput label="Pincode" placeholder="Pincode" {...form.getInputProps('pincode')} required />
          <TextInput label="GST Number" placeholder="GST No." {...form.getInputProps('gst')} required />
          <TextInput label="UserName" placeholder="Name" {...form.getInputProps('username')} required />

          <PasswordInput
            label="Password"
            placeholder="Password"
            {...form.getInputProps('password')}
            required
          />

          <PasswordInput
            mt="sm"
            label="Confirm password"
            placeholder="Confirm password"
            {...form.getInputProps('confirmPassword')}
            required
          />
          <Group position='center'>
            <Button type="submit" mt="sm" onSubmit={onOrgSignUp}>
              Submit
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
export default OrgCreateUser;