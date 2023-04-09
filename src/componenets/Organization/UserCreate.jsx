import React from 'react'

import { useForm } from '@mantine/form';
import { Select, TextInput, Button, Container, Paper, Title, Group, } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { DateInput } from '@mantine/dates';
import { useStateContext } from '../../contexts/ContextProvider';
import axios, * as others from 'axios';
import { useState } from 'react';

function OrgCreateUser() {

  const [gender, setGender] = useState('')
  const [value, setValue] = useState(null);
  const [admitted, setAdmitted] = useState(null);
  const [discharged, setDischarged] = useState(null);
  const navigate = useNavigate();
  const { orgData } = useStateContext();

  const onOrgSignUp = (val) => {
    var params = {
      "privateId": "123456789",
      "citName": orgData.org.city,
      "gender": gender,
      "dob": value,
      "contactNumber": Number(val.number),
      "fatherName": val.fname,
      "motherName": val.mname,
      "medicalRecord": {
        "hospitalName": "ABC Hospital",
        "patientSummary": "Patient is fine",
        "patientId": val.pid,
        "admittedDate": admitted,
        "dischargedDate": discharged
      },
    }

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json"
    }
    axios
      .post(`${process.env.REACT_URL_NAME}/api/org/citizen/create`, params, headers)
      .then((response) => {
        console.log("Success")
        navigate('/request')
      }, (error) => {
        console.log("Error")
        navigate('/error')
      });
  }

  const form = useForm({
    initialValues: { fname: '', mname: '', number: '', pid: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      number: (value) => ((value.length != 10 || /^-?\d+$/.test(value) == false) ? 'Invalid Number' : null),
    },
  });

  return (
    <Container size={520} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Enter Citizen Details
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => onOrgSignUp(values))}>
          <Select
            style={{ marginTop: 20, zIndex: 2 }}
            data={['Male', 'Female', 'Transgender']}
            placeholder="Gender"
            label="Gender"
            onChange={setGender}
            required
          />
          <DateInput
            value={value}
            onChange={setValue}
            label="Date Of Birth"
            placeholder="DOB"

            mx="auto"
            required
          />
          <TextInput

            mt="sm"
            label="Contact Number"
            placeholder="Number"
            min={0}
            max={99}
            {...form.getInputProps('number')}
          />
          <TextInput mt="sm" label="Patient Id" placeholder="ID" {...form.getInputProps('pid')} />
          <TextInput mt="sm" label="Father Name" placeholder="Name" {...form.getInputProps('fname')} />
          <TextInput label="Mother Name" placeholder="Name" {...form.getInputProps('mname')} r />
          <DateInput
            value={admitted}
            onChange={setAdmitted}
            label="Admitted Date"
            placeholder="Date"
            mx="auto"
            required
          />
          <DateInput
            value={discharged}
            onChange={setDischarged}
            label="Discharged Date"
            placeholder="Date"
            mx="auto"
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