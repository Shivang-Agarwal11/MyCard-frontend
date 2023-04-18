import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useStateContext } from '../contexts/ContextProvider';
import axios, * as others from 'axios';
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
} from '@mantine/core';
import API_URL from '../url';


export default function OrgLogin() {
  const navigate = useNavigate()

  const { setLogin, setOrgData } = useStateContext()

  const onSubmitOrg = () => {
    const params = {
      ...form
    }

    axios
      .post(`${API_URL}/api/org/login`, params)
      .then((response) => {
        if (response.data.data.org['isValidated'] == true) {
          localStorage.setItem("role", JSON.stringify({ "user": "organization" }))
          localStorage.setItem("token", response.data.data.token)
          setLogin("Organization")
          setOrgData(response.data.data)
          navigate("/org/home")
        }
        else if(response.data.data.org['isRejected']==true){
          navigate('/error')
        }
        else if(response.data.data.org['isValidated']==false){
          navigate('/request')
        }
      }, (error) => {
        alert("Try Again Some Error has occured");
      

      });

  }



  const [form, setForm] = useState({
    username: "",
    password: "",

  });


  return (
    <div>
      {(
        <Container size={420} my={40}>
          <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
          >
            Welcome Organization!
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Organization UserName" placeholder="XXXXXXXXXX" required value={form.username}
              onChange={e => {
                setForm({
                  ...form,
                  username: e.target.value
                });
              }} />

            <PasswordInput label="Password" placeholder="Enter Password" required mt="md" value={form.password}
              onChange={e => {
                setForm({
                  ...form,
                  password: e.target.value
                });
              }} />
            <Group position='center'>
              <Button mt="xl" onClick={onSubmitOrg}>
                Log in
              </Button>
              <Button mt="xl" variant='link' component={Link} sx={{ backgroundColor: "#228BE6", color: "white" }} to='/signup'>
                Sign Up
              </Button>
            </Group>
          </Paper>
        </Container>)}
    </div>
  );
}