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
  
  const onSubmit=()=>{
    
    localStorage.setItem(
      "user",
     1)
      
    }
     
    
    export default function Login() {
      const navigate = useNavigate()
      const [form, setForm] = useState({
        email: 'example.com',
        password:"",
        
      });
      useEffect(() => {
        if (localStorage.getItem("user")) navigate("/")
      }, [navigate])
      const logg=localStorage.getItem("user")
      return (<div>
        {logg==1? <Navigate to='/'/>:(
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Welcome back!
        </Title>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor href="#" size="sm" onClick={(event) => event.preventDefault()}>
            Create account
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required  value={form.email}
           onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}/>
          <PasswordInput label="Password" placeholder="Your password" required mt="md" value={form.password}
           onChange={e => {
            setForm({
              ...form,
              password: e.target.value
            });
          }}/>
          <Group position="apart" mt="lg">
            <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
            <Anchor onClick={(event) => event.preventDefault()} href="#" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" onClick={onSubmit}>
            Sign in
          </Button>
        </Paper>
      </Container>)}
      </div>
    );
  }