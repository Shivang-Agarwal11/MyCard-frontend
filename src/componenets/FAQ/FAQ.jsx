import { Container, Title, Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl,
    minHeight: 500,
  },

  title: {
    marginBottom: theme.spacing.xl * 1.5,
  },

  item: {
    borderRadius: theme.radius.md,
    // marginBottom: theme.spacing.lg,

    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export default function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper} pb="sm" sx={{width:"65rem",marginTop:"10px"}}>
      <Title align="center" className={classes.title} pb="md">
        Frequently Asked Questions
      </Title>

      <Accordion  variant="separated" chevronPosition="left">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>How can I login in to MyCard Potral?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>Can I delete my data from MyCard?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>How to get my digital footprint?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>Do you store my information securely?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>What types of organization have been registered with MyCard ecosystem?</Accordion.Control>
          <Accordion.Panel>{placeholder}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}