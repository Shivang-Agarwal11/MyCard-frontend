import { Box, Text, Code } from '@mantine/core';

export default function AdminBox(props) {
  return (
    <div 
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // height: "100vh",
      paddingBottom:"20px"
    }}>
    <Box 
      sx={(theme) => ({
        backgroundColor: "#66b6d2",
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.lg,
        alignContent:'center'
      })}
      mx="20px"
      w={props.width}
      h={props.height}
    
    >
        <Text fz='lg' c='black' fs='italic' fw={700}>{props.title}</Text>
      
    </Box></div>
  );
}