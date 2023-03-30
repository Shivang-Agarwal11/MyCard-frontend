import { createStyles, Title, Text, Button, Container, Group, rem } from '@mantine/core';
import { Link, Navigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(120),
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(540),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][1],
  },
}));

export default function RequestPage() {
  const { classes } = useStyles();
  const ReturnHome=()=>{
    <Navigate to="/"/>
  }
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>Request Pending</div>
        <Title className={classes.title}>The request has been send to the admin for the approval of the organizaton...</Title>
        <Text size="lg" align="center" className={classes.description}>
          Wait for the approval. You will shortly recieve a notification on email.
        </Text>
        <Group position="center">
          <Button variant="link" size="md" to="/" sx={{backgroundColor:"white"}} component={Link}>
            Return to Home
          </Button>
        </Group>
      </Container>
    </div>
  );
}