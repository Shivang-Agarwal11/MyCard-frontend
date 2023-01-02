import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useStateContext } from '../contexts/ContextProvider';
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

  useEffect(() => {
    if (localStorage.getItem("role")) navigate("/")
  }, [navigate])

  const onSubmitOrg = () => {
    localStorage.setItem("role", JSON.stringify({ "user": "organization" }))
    setLoginUser({ user: "organization", password: "" })
    navigate("/")

  }

  const { setLoginUser } = useStateContext()

  const [form, setForm] = useState({
    orgid: "",
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
            <TextInput label="Organization ID" placeholder="XXXXXXXXXX" required value={form.orgid}
              onChange={e => {
                setForm({
                  ...form,
                  orgid: e.target.value
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
              <Button mt="xl" variant='link' component={Link} to='/signup'>
                Sign Up
              </Button>
            </Group>
          </Paper>
        </Container>)}
    </div>
  );
}