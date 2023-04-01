import { Container, Card, useMantineTheme, Flex } from '@mantine/core';
import { Text } from '@mantine/core';
import { Group, ThemeIcon, UnstyledButton } from '@mantine/core';

export default function LongCard(props) {

  const centerdata = props.carddata.map((item) => (
    <Card shadow="sm"  radius="sm" withBorder w={700} p="lg" sx={{borderTop:"5px solid black", backgroundColor:"", marginRight:"10px"}} mb="md">
      
    <UnstyledButton  key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} />
        </ThemeIcon>
        <div>
          <Text size="xl" weight={500}>
            {item.title}
          </Text>
          <Text size="l" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
    
    </Card>
  ));
  return (
  <Container pb="lg"  pl="xl" ml="xl">
    
 
    {centerdata}

    </Container>    
  );
}