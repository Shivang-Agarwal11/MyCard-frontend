import { Card, List, Text} from "@mantine/core";
export default function AdminCard(props){
    const items=props.items
    console.log(items)
    return (<Card
    
    >
      <List
        style={{
              height: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color:"black"
        }}
        >
        {items.map((item) => (
            <Text 
            align="center"
            style={{
            width: "40%",
            backgroundColor: "lightgray",
            marginBottom:"20px",
          }}
          >{item.name}</Text>
        ))}
      </List>
    </Card>
    );
}