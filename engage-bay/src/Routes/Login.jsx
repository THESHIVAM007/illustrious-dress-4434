import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Input, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'

function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const placement = "left"
  
    return (
      <>
        <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>
                <img width="200px" height="20px" src="https://d2p078bqz5urf7.cloudfront.net/cloud/assets/img/engagebay.png" alt="" />
                <Text> Login</Text>
            </DrawerHeader>
            <DrawerBody>
            <Box>
                <label>UserName</label>
<Input placeholder='UserName'/>
<label>Passeord</label>
<Input placeholder="password " />
            </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default Login