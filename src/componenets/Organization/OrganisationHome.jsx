import { useState, useEffect } from 'react';
import { createStyles, Navbar, UnstyledButton, Tooltip, rem } from '@mantine/core';
import { useStateContext } from '../../contexts/ContextProvider';
import {
  IconHome2,
  IconGauge,
  IconSettings,
  IconUserPlus
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { OrgHomePage } from './HomePage';
import OrgCreateUser from './UserCreate';
import GetUser from './GetUser';
import { IconUser } from '@tabler/icons';


const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
  },

  aside: {
    flex: `0 0 ${rem(60)}`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRight: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
  },

  main: {
    flex: 1,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  mainLink: {
    width: rem(44),
    height: rem(44),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  mainLinkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },

  title: {
    boxSizing: 'border-box',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xl,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.md,
    paddingTop: rem(18),
    height: rem(60),
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
  },

  logo: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: rem(60),
    paddingTop: theme.spacing.md,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    marginBottom: theme.spacing.xl,
  },

  link: {
    boxSizing: 'border-box',
    display: 'block',
    textDecoration: 'none',
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    padding: `0 ${theme.spacing.md}`,
    fontSize: theme.fontSizes.sm,
    marginRight: theme.spacing.md,
    fontWeight: 500,
    height: rem(44),
    lineHeight: rem(44),

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkActive: {
    '&, &:hover': {
      borderLeftColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
        .background,
      color: theme.white,
    },
  },
}));



const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home', link: '/org/home' },
  { icon: IconGauge, label: 'Dashboard', link: '/org/dashboard' },
  { icon: IconSettings, label: 'Settings', link: 'org/settings' },
  { icon: IconUser, label: 'Create User', link: 'org/create' },
];
const mainLinksMockdata2 = [
  { icon: IconHome2, label: 'Home', link: '/org/home' },
  { icon: IconGauge, label: 'Dashboard', link: '/org/dashboard' },
  { icon: IconSettings, label: 'Settings', link: 'org/settings' },
];


export default function OrganizationHome() {
  const { classes, cx } = useStyles();
  const [orgUser, setOrgUser] = useState(false);
  const [active, setActive] = useState('Home');
  const [register, setRegister] = useState(false);
  const { orgData } = useStateContext();

  const getUser = () => {
    setOrgUser(true)
    setActive("none")
  }

  const RegisterUser = () => {
    setOrgUser(false)
    setActive("none")
    setRegister(true)
  }
  const Cancel = () => {
    setRegister("false")
    setActive("Home")
  }

  const setStates = (label) => {
    setActive(label)
    setOrgUser(false)
  }
  var actual = mainLinksMockdata2;
  if (orgData.org.type == "Medical") {
    actual = mainLinksMockdata
  }

  const mainLinks = actual.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    >
      <UnstyledButton
        onClick={() => setActive(link.label)}
        className={cx(classes.mainLink, { [classes.mainLinkActive]: link.label === active })}
        component={Link}
      // to={link.link}
      >
        <link.icon size="1.4rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  ));

  return (
    <div style={{ "display": "grid", "gridTemplateColumns": "8% 90%" }}>

      <div sx={{ display: "inline" }}>
        <Navbar height={750} width={{ sm: 100 }} className={classes.wrapper}>
          <div className={classes.aside}>
            {mainLinks}
          </div>
        </Navbar>
      </div>
      {active === 'Home' ? <OrgHomePage getUser={getUser} RegisterUser={RegisterUser} /> : <></>}
      {active === 'Create User' ? <OrgCreateUser Cancel={Cancel} /> : <></>}
      {((active != 'Home' && active!= 'Create User' && orgUser) === true) ? <GetUser /> : <></>}

    </div>
  );
}
