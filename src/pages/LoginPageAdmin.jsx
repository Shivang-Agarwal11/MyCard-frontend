import React, { useEffect, useState } from 'react'
import {  useNavigate } from "react-router-dom"
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
} from '@mantine/core';
import { useStateContext } from '../contexts/ContextProvider';

export default function AdminLogin(props) {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("role")) navigate("/")
  }, [navigate])

  const { setLoginUser } = useStateContext()

  const onSubmitAdmin = () => {
    localStorage.setItem("role", JSON.stringify({ "user": "administrator" }))
    setLoginUser({ user: "admin", password: "" })
    navigate("/")

  }


  const [form, setForm] = useState({
    adminid: "",
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
            Welcome Admin!
          </Title>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Admin ID" placeholder="XXXXXXXXXX" required value={form.orgid}
              onChange={e => {
                setForm({
                  ...form,
                  adminid: e.target.value
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
              <Button mt="xl" onClick={onSubmitAdmin}>
                Log in
              </Button>
            </Group>
          </Paper>
        </Container>)}
    </div>
  );
}