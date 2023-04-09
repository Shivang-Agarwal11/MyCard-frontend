import { Box, Text, Code } from '@mantine/core';

export default function AdminBox(props) {
  return (
    <div 
    style={{
      display: "flex",
      justifyContent: "center",
      paddingBottom:"20px"
    }}>
    <Box 
      sx={(theme) => ({
        backgroundColor: "#228BE6",
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.lg,
        alignContent:'center'
      })}
      mx="20px"
      w={props.width}
      h={props.height}
    
    >
        <Text fz='xl' c='white' fs='oblique' fw={900}>{props.title}</Text>
      
    </Box></div>
  );
}