import { createStyles, Title, Text, Container, Group, rem } from '@mantine/core';

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

export default function UserCreation() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>User Registered</div>
        <Title className={classes.title}>The user has been created with the unique 15 digit MyCard Number...</Title>
        <Text size="lg" align="center" className={classes.description}>
          You will shortly recieve a notification on email.
        </Text>
        <Group position="center">
        </Group>
      </Container>
    </div>
  );
}