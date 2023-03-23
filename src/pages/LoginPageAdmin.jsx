import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
} from '@mantine/core';
import axios, * as others from 'axios';
import { useStateContext } from '../contexts/ContextProvider';

export default function AdminLogin(props) {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("role")) navigate("/")
  }, [navigate])

  const { setLogin } = useStateContext()

  const onSubmitAdmin = () => {


    const params = {
      "username": form.adminid,
      "password": form.password
    }

    axios
      .post("https://mycard.up.railway.app/admin/login", params)
      .then((response) => {


        localStorage.setItem("role", JSON.stringify({ "user": "administrator" }))
        localStorage.setItem("token", response.data.data.token)
        setLogin({ user: "admin" })
        console.log("Success")
        navigate("/admin/home")
      }, (error) => {
        console.log("Error")

      });

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
            <TextInput label="Admin Name" placeholder="XXXXXXXXXX" required value={form.orgid}
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