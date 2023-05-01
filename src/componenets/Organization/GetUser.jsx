import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core';



export default function GetUser() {
  const navigate = useNavigate()


  const onSubmitUser = () => {
    localStorage.setItem("role", JSON.stringify({ "user": "user" }))
    // setLogin({ user: "User", password: "" })
    // navigate("/")


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
        Get MyCard User Details
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
          Get Details
        </Button>
      </Paper>
    </Container>
  </div>
  );
}
