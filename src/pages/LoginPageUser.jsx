import React,{ useEffect, useState} from 'react'
import { Link, useNavigate , Navigate } from "react-router-dom"
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';

  export default function UserLogin(props){
    
      const [form, setForm] = useState({
        cardno: "",
        OTP:"",
        
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
          <TextInput label="MyCard Number" placeholder="XXXXX XXXXX XXXXX" required  value={form.cardno}
           onChange={e => {
             setForm({
               ...form,
               cardno: e.target.value
              });
            }}/>
             <Button fullWidth mt="xl" onClick={props.onSendOtp}>
               Send OTP
             </Button>
          <TextInput label="OTP" placeholder="Enter OTP" required mt="md" value={form.OTP}
           onChange={e => {
            setForm({
              ...form,
              OTP: e.target.value
            });
          }}/>
          
          <Button fullWidth mt="xl" onClick={props.onSubmit}>
            Log in
          </Button>
        </Paper>
      </Container>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Organization Login?
            <Anchor component='button' type='button' size="sm" onClick={props.ChangeToOrganization}>
              Click Here 
            </Anchor>
          </Text>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Admin Login?
            <Anchor component='button' type='button' size="sm" onClick={props.ChangeToAdmin}>
              Click Here 
            </Anchor>
          </Text>
      </div>
    );
  }
  