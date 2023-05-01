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
import API_URL from '../url';

export default function AdminLogin(props) {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("role")) navigate("/")
  }, [navigate])

  const { setLogin } = useStateContext()
  const { setAdminData } =useStateContext()
  const onSubmitAdmin = () => {


    const params = {
      "username": form.adminid,
      "password": form.password
    }
    const headers={
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }

    axios
      .post(`${API_URL}/admin/login`, params,{headers:headers})
      .then((response) => {
        localStorage.setItem("role", JSON.stringify({ "user": "administrator" }))
        localStorage.setItem("token", response.data.data.token)
        setLogin( "admin")
        setAdminData(response.data.data)
        console.log("Success")
        navigate("/admin/home")
      }, (error) => {
        alert("Try Again Some Error has occured");

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

          <Paper withBorder shadow="md" p={30} mt={30} radius="md" bg="#E8EAEE">
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