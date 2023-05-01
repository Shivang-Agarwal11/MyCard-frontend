import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core';
import axios, * as others from 'axios';
import API_URL from '../url';
import { useStateContext } from '../contexts/ContextProvider';

export default function UserLogin() {
  const navigate = useNavigate()
  let otp = 0;
  // useEffect(() => {
  //   if (localStorage.getItem("role")) navigate("/")
  // }, [navigate])

  const { setLogin } = useStateContext()

  const onSubmitUser = () => {
    const data = { ...form }
    const params = {
      "publicId": data.cardno
    }
    axios
      .post(`${API_URL}/api/citizen/login`, params)
      .then((response) => {
        localStorage.setItem("role", JSON.stringify({ "user": "citizen" }))
        localStorage.setItem("token", response.data.data.token)
        setLogin("User")
        navigate("/user/home")
      }, (error) => {
        alert("Try Again Some Error has occured");
      });
  }
  const onSendOtp = () => {
    otp = Math.floor((Math.random() * 100000) + 1);
    alert(`Your OTP is ${otp}`)
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

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" bg="#E8EAEE">
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
