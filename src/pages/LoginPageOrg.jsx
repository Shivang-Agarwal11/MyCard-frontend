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


export default function OrgLogin() {
  const navigate = useNavigate()

 

  const { setLogin } = useStateContext()

  const onSubmitOrg = () => {
    // localStorage.setItem("role", JSON.stringify({ "user": "organization" }))
    // setLoginUser({ user: "organization", password: "" })
    // navigate("/")
    const params={
      ...form
    }
    console.log(params)

    axios
        .post("https://mycard.up.railway.app/api/org/login", params)
        .then((response) => {
          console.log("Success")
          
          console.log(response.data.data)
          localStorage.setItem("role", JSON.stringify({ "user": "organization" }))
          localStorage.setItem("token",response.data.data.token)
          setLogin({ user: "Organization"})
          navigate("/org/home")
        }, (error) => {
          console.log("Error")
          
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
              <Button mt="xl" variant='link' component={Link} sx={{backgroundColor:"#228BE6",color:"white"}} to='/signup'>
                Sign Up
              </Button>
            </Group>
          </Paper>
        </Container>)}
    </div>
  );
}