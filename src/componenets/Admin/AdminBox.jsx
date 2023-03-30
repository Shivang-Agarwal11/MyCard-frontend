import { Box, Text, Code } from '@mantine/core';

export default function AdminBox(props) {
  return (
    <Box 
      sx={(theme) => ({
        backgroundColor: "#DEE0D9",
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',
      })}
      mx="20px"
      wx="100px"
    >
        <Text fz='lg' c='black' fs='italic' fw={700}>{props.title}</Text>
      
    </Box>
  );
}