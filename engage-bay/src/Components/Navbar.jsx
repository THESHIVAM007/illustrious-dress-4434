import React from 'react'
import {Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Spacer, Text, useDisclosure} from '@chakra-ui/react'
import NavDrop from './NavDrop'
import ProductDrop from './Productdrop'

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen1, onOpen1, onClose1 } = useDisclosure()

    const placement = "left"
   
  return (
<Box style={{
    // border:"1px solid black",
    backgroundColor:"#F4EBE3",
    height:"60px",
    width:"100%"
}}> 
<Flex style={{
     alignItems:'center',
}} gap="2rem">
    <Box mt=".5rem" ml="10rem">
        <img width="215px" height="50px" src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg" alt="engage-bay-logo" />
    </Box>
    <Spacer/>
   <ProductDrop title="Products"/>
    <Box  fontWeight="bold">
        Pricing
    </Box>
    <Box  fontWeight="bold">
       <NavDrop title="Resources"/>
    </Box >
    <Box  fontWeight="bold">
       <NavDrop title="Free Tools"/>
    </Box >
    <Box  fontWeight="bold">
     Blog
    </Box >
    <Box  fontWeight="bold" >
    <Box>
    <Button colorScheme='blue' onClick={onOpen}>
    Login
  </Button>
  <Drawer size="lg" placement={placement} onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader borderBottomWidth='1px'>
          <img width="200px" height="20px" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png" alt="" />
      </DrawerHeader>
      <DrawerBody alignItems="center">
      <Box>
      <Text mt="3rem" fontSize="3xl" fontWeight="semibold"> Login</Text>
<br/>
<br/>
<br/>
          <label>UserName</label>
          <br/>
<Input h="50px" mt="1rem" width="480px"  placeholder='UserName'/>
<br/>
<br/>
<br/>
<label>Password</label>
<br/>
<Input h="50px" mt="1rem" width="480px"  placeholder="password " />

<Button style={{
    marginTop:"3rem",
        backgroundColor:"#FF885E",
        color:"white",
        width:"480px",
        height:"50px",
        fontSize:"20px"
    }}
> Login</Button>
<Button style={{
    marginTop:"1rem",
        backgroundColor:"#0069D9",
        color:"white",
        width:"480px",
        height:"50px",
        fontSize:"20px"
    }}
> Sign In With Google Suite</Button>
<Text>Forgot Password?</Text>
<Text>Don't have an account? Sign Up</Text>
<Text>Privacy Policy </Text>
      </Box>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
    </Box>
   
            </Box>
    <Box mt=".5rem" style={{
        backgroundColor:"#563097",
        color:"white",
        width:"121px",
        height:"40px",
        borderRadius:"5px",
        alignItems:"center",
        paddingTop:".3rem"
    }}> <NavDrop title="Free Demo"/> </Box>
    
    <Box>
    <Button mt=".5rem" style={{
        backgroundColor:"#FF885E",
        color:"white"
    }} onClick={onOpen1}> Free Sign-Up</Button>
  <Drawer size="lg" placement={placement} onClose={onClose1} isOpen={isOpen1}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader borderBottomWidth='1px'>
          <img width="200px" height="20px" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png" alt="" />
      </DrawerHeader>
      <DrawerBody alignItems="center">
      <Box>
      <Text mt="3rem" fontSize="3xl" fontWeight="semibold"> Login</Text>
<br/>
<br/>
<br/>
          <label>UserName</label>
          <br/>
<Input h="50px" mt="1rem" width="480px"  placeholder='UserName'/>
<br/>
<br/>
<br/>
<label>Password</label>
<br/>
<Input h="50px" mt="1rem" width="480px"  placeholder="password " />

<Button style={{
    marginTop:"3rem",
        backgroundColor:"#FF885E",
        color:"white",
        width:"480px",
        height:"50px",
        fontSize:"20px"
    }}
> Login</Button>
<Button style={{
    marginTop:"1rem",
        backgroundColor:"#0069D9",
        color:"white",
        width:"480px",
        height:"50px",
        fontSize:"20px"
    }}
> Sign In With Google Suite</Button>
<Text>Forgot Password?</Text>
<Text>Don't have an account? Sign Up</Text>
<Text>Privacy Policy </Text>
      </Box>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
    </Box>
<Spacer/>
</Flex>
    
</Box>
    )
}

export default Navbar