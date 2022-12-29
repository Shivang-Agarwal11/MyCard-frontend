import React from 'react'

import { useForm } from '@mantine/form';
import {Select, TextInput, Button, Container , Paper, PasswordInput, Title, Group}  from '@mantine/core';

export default function SignUpOrg() {
  const form = useForm({
    initialValues: { name: '', email: '', number:'',address:'',gst:'', password:'',confirmPassword:'' ,username:''},

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      number: (value) => ((value.length !=10 || /^-?\d+$/.test(value)==false) ? 'Invalid Number' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Container size={420} my={40}>
        <Title
          align="center"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Start with Us!
        </Title>
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput label="Organization Name" placeholder="Name" {...form.getInputProps('name')} />
      <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={['Finance', 'Hospital', 'Educational', 'Judicial']}
        placeholder="Type"
        label="Your Organization Type"
        // classNames={classes}
      />
      <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
      <TextInput
        mt="sm"
        label="Mobile Number"
        placeholder="number"
        min={0}
        max={99}
        {...form.getInputProps('number')}
      />
      <TextInput label="Organization Address" placeholder="Address" {...form.getInputProps('address')} />
      <TextInput label="GST Number" placeholder="GST No." {...form.getInputProps('gst')} />
      <TextInput label="User Name" placeholder="Name" {...form.getInputProps('username')} />
      <PasswordInput
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />
<Group position='center'>
      <Button type="submit" mt="sm" >
        Submit
      </Button>
      </Group>
    </form>
    </Paper>
        </Container>
  );
}