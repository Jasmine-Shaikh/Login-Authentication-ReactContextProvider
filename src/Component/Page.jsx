import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { Box, Button,Center, Flex } from "@chakra-ui/react";
export const Page = () =>{
    
    const {isAuth} = React.useContext(AuthContext);
    const {handleIsAuth} = React.useContext(AuthContext);
    const {token} = React.useContext(AuthContext);
    const {toggleAuth} = React.useContext(AuthContext);
    console.log(isAuth)
    return (
      <div >
          <Box p={4} bg='pink'  color='#6094b3'>
          <Center >
            
          <h1 style={{marginRight: 40, fontSize: 20, fontWeight: "bold" }}>Hey there!</h1>
          {
            isAuth ? <Button colorScheme='teal' variant='outline' onClick={()=>{toggleAuth()}}>
            Logout
          </Button> :<Button colorScheme='teal' variant='solid' onClick={()=>{handleIsAuth()}}>
            Login
          </Button>
          }
         
        </Center>
  </Box>

       
        <Box p={4} bg='#6094b3'  color='pink'>{
  
          isAuth ? <div ><h1 style={{marginRight: 40, fontSize: 20, fontWeight: "bold" }}>Welcome user! </h1><h2 style={{marginRight: 40, fontSize: 20, fontWeight: "bold" }}>{`Your Token Id is : ${token}`}</h2></div> : <div><h1 style={{ fontSize: 20, fontWeight: "bold" }}>Please Login to know your Token Id.</h1></div>
  }</Box>
        
      </div>
    );
    
}