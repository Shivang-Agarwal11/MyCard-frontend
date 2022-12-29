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

  export default function AdminLogin(props){
    const navigate = useNavigate()
      const [form, setForm] = useState({
        adminid: "",
        password:"",
        
      });
    const org=localStorage.getItem("admin")
    return(
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
          <TextInput label="Admin ID" placeholder="XXXXXXXXXX" required  value={form.orgid}
           onChange={e => {
             setForm({
               ...form,
               adminid: e.target.value
              });
            }}/>
            
          <PasswordInput label="Password" placeholder="Enter Password" required mt="md" value={form.password}
           onChange={e => {
            setForm({
              ...form,
              password: e.target.value
            });
          }}/>
          <Group position='center'>
          <Button mt="xl" onClick={props.onSubmit}>
            Log in
          </Button>
          </Group>
        </Paper>
      </Container>)}
          <Text color="dimmed" size="sm" align="center" mt={5}>
            User Login?{' '}
            <Anchor href="#" size="sm" onClick={props.ChangeToUser}>
              Click Here
            </Anchor>
          </Text>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Organization Login?
            <Anchor component='button' type='button' size="sm" onClick={props.ChangeToOrganization}>
              Click Here 
            </Anchor>
          </Text>
      </div>
    );
  }