import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';
import API_URL from '../../url';
import {
  TextInput,
  Paper,
  Title,
  Container,
  Button,
} from '@mantine/core';
import { useStateContext } from '../../contexts/ContextProvider';



export default function GetUser(props) {
  const navigate = useNavigate()
  let otp = 0;
  const { orgData, setUserDetails } =useStateContext();
  const onSubmitUser = () => {
    const data = { ...form }
   
    const header = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }
    // console.log(header)
    axios
      .get(`${API_URL}/api/org/citizen/retrieve?publicId=${data.cardno}`,header)
      .then((response) => {
          setUserDetails(response.data.data)
          props.DisplayDatauser()
      }, (error) => {
        console.log(error)
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
