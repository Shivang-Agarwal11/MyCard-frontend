import React from 'react'

import { useForm } from '@mantine/form';
import { Select, TextInput, Button, Container, Paper, Title, Group, } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { DateInput } from '@mantine/dates';
import { useStateContext } from '../../contexts/ContextProvider';
import axios, * as others from 'axios';
import { useState } from 'react';
import API_URL from '../../url';
import UserCreation from '../../pages/UserCreation';

function OrgCreateUser(props) {
  const [userCreated, setUserCreated] = useState(false);
  const [gender, setGender] = useState('')
  const [value, setValue] = useState(null);
  const [admitted, setAdmitted] = useState(null);
  const [discharged, setDischarged] = useState(null);
  const navigate = useNavigate();
  const { orgData } = useStateContext();

  const onOrgSignUp = (val) => {
    var params = {
      "citName": orgData.org.city,
      "gender": gender,
      "dob": value,
      "contactNumber": Number(val.number),
      "fatherName": val.fname,
      "motherName": val.mname,
      "medicalRecord": {
        "record": [{
          "patientSummary": val.summary,
          "patientId": val.pid,
          "admittedDate": admitted,
          "dischargedDate": discharged
        }]
      },
    }

    const header = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
    axios
      .post(`${API_URL}/api/org/citizen/create`, params, header)
      .then((response) => {
        setUserCreated(true)
        console.log(response)
      }, (error) => {
        console.log("Error")
        navigate('/error')
      });
  }

  const form = useForm({
    initialValues: { fname: '', mname: '', number: '', pid: '', summary: '' },
    validate: {
      number: (value) => ((value.length != 10 || /^-?\d+$/.test(value) == false) ? 'Invalid Number' : null),
    },
  });
  if (userCreated === true)
    return (
      <UserCreation />
    )
  else
    return (
      <Container my={40} w="80rem">
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Enter Citizen Details
        </Title>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md" bg="#E8EAEE">
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
            <TextInput

              mt="sm"
              label="Patient Summary"
              placeholder="Summary"
              min={0}
              max={99}
              {...form.getInputProps('summary')}
            />
            <TextInput mt="sm" label="Patient Id" placeholder="ID" {...form.getInputProps('pid')} required />
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
              <Button mt="sm" onClick={props.Cancel}>
                Cancel
              </Button>
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