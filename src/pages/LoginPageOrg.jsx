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
import SignUpOrg from './SignUpOrg';

  export default function OrgLogin(props){

    const onClickSignUp=()=>{
      updatedSignUp(1);
    }


    const [SignUp,updatedSignUp]=useState(0)
    const navigate = useNavigate()
      const [form, setForm] = useState({
        orgid: "",
        password:"",
        
      });
    const org=localStorage.getItem("organization")
    if(SignUp===1)
    return (<SignUpOrg/>)
    else
    return(
        <div>
        {(
      <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Welcome Organization!
        </Title>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Organization ID" placeholder="XXXXXXXXXX" required  value={form.orgid}
           onChange={e => {
             setForm({
               ...form,
               orgid: e.target.value
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
          <Button  mt="xl" variant='link' component={Link} to='/signup'>
            Sign Up
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
            Admin Login?{' '}
            <Anchor href="#" size="sm" onClick={props.ChangeToAdmin}>
              Click Here
            </Anchor>
          </Text>
      </div>
    );
  }