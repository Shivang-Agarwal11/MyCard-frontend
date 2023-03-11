import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core';

import { useStateContext } from '../contexts/ContextProvider';

export default function UserLogin() {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("role")) navigate("/")
  }, [navigate])

  const { setLogin } = useStateContext()

  const onSubmitUser = () => {
    localStorage.setItem("role", JSON.stringify({ "user": "user" }))
    setLogin({ user: "User", password: "" })
    navigate("/")


  }
  const onSendOtp = () => {
    console.log("Sent")
  }

  const [form, setForm] = useState({
    cardno: "",
    OTP: "",

  });
  
  return (<div>
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
      >
        Hello MyCard User!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="MyCard Number" placeholder="XXXXX XXXXX XXXXX" required value={form.cardno}
          onChange={e => {
            setForm({
              ...form,
              cardno: e.target.value
            });
          }} />
        <Button fullWidth mt="xl" onClick={onSendOtp}>
          Send OTP
        </Button>
        <TextInput label="OTP" placeholder="Enter OTP" required mt="md" value={form.OTP}
          onChange={e => {
            setForm({
              ...form,
              OTP: e.target.value
            });
          }} />

        <Button fullWidth mt="xl" onClick={onSubmitUser}>
          Log in
        </Button>
      </Paper>
    </Container>
  </div>
  );
}
