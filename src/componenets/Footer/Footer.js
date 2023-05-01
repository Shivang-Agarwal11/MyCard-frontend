import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram
} from "@tabler/icons";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import GetInTouchSimple from "./GetInTouch";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
      }`
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center"
    }
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none"
    }
  },

  wrapper: {
    width: 160
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline"
    }
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column"
    }
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs
    }
  }
}));

export default function FooterLinks({ data }) {
  const { classes } = useStyles();
  const navigate = useNavigate()
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component={Link}
        to={link.link}
        // onClick={(event) => event.preventDefault()}
        sx={{ color: "grey", fontSize: 14 }}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title} style={{"paddingRight":"100px"}} >
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <div>
      <Container className={classes.inner} fluid="True" sx={{
        borderTop:"1px solid lightgrey",
        paddingTop:"20px"
      }}>
        <div className={classes.logo}>
          {/* <MantineLogo size={30} /> */}
          <Text size="lg" sx={{ fontSize: 24 }} className={classes.logo}>MyCard</Text>

          <Text size="s" sx={{ fontSize: 14 }} color="dimmed" className={classes.description} >
            Get your life history in just one touch.
          </Text>
        </div>
        <div className={classes.groups} >{groups}</div>
      </Container>
      <Container className={classes.afterFooter} fluid="True">
        <Text color="dimmed" size="sm">
          © 2022 crypshiv.dev. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap sx={{ paddingBottom: "0px" }}>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={2.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={2.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={2.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
