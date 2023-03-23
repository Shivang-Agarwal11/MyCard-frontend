import { createStyles, Title, Text, Button, Container, Group, rem } from '@mantine/core';
import { Link, Navigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(120),
    backgroundColor: theme.fn.variant({ variant: 'filled', color: "#E21818" }).background,
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

export default function ErrorPage() {
  const { classes } = useStyles();
  const ReturnHome = () => {
    <Navigate to="/" />
  }
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>Error 400</div>
        <Title className={classes.title}>Some error occured! Try again.</Title>
        <Text size="lg" align="center" className={classes.description}>
          Return to try again
        </Text>
        <Group position="center">
          <Button variant="link" size="md" to="/" sx={{ backgroundColor: "white" }} component={Link}>
            Return to Home
          </Button>
        </Group>
      </Container>
    </div>
  );
}