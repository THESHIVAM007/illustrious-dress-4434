import { Box, SimpleGrid, Input, HStack, Text, Button, VStack ,Select } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
<Box mt="3rem" bg="#4860CA" >
    <Box>

    <HStack gap="2rem">
    <Box paddingLeft="5rem">
     <img width="400px" height="316px" src="https://cdn5.engagebay.com/new/assets/img/cta-img.svg" alt="qwerty" />
    </Box>
   <Box justifyContent="flex-start">
    <Text color="white" fonSize="3xl" fontWeight="bold">Get Started</Text>
    <SimpleGrid mt="2rem" columns={2} spacing={10} >
<Input 
placeholder="Name" 
style={{
    backgroundColor:"#2F3798",
    height:"50px",
    width:"415px",
    color:"white"

}}    /  >
<Input 
placeholder="Website Url"
style={{
    backgroundColor:"#2F3798",
    height:"50px",
    width:"415px",
    color:"white"

}}  />
<Input 
placeholder="Username" style={{
    backgroundColor:"#2F3798",
    height:"50px",
    width:"415px",
    color:"white",
    

}}  />
<Input style={{
    backgroundColor:"#2F3798",
    height:"50px",
    width:"415px",
    color:"white"

}}  
placeholder="Password" />

    </SimpleGrid>
    <Box pt="2rem" gap="2rem">
        <Button style={{
                    backgroundColor:"#EF6333",
                    width:"185px",
                    height:"47px",
                    color:"white",
                    padding:".1rem"
                }}>SIGNUP FOR FREE</Button>
        <Button ml="2rem"
        style={{
            width:"185px",
            height:"47px",
            
            padding:".1rem"
        }}>SCHEDULE A CALL</Button>
    </Box>
</Box>
    </HStack>
    </Box>
<HStack gap="20px" justifyContent="space-evenly" >
    <VStack color="white">
        <Text fontWeight="bold">Attract Web Visitors</Text>
        <Text>Email Marketing</Text>
        <Text>Email Templates</Text>
        <Text>Email Broadcast</Text>
        <Text>Double Opt-In Email</Text>
        <Text>Autoresponder Email</Text>
        <Text>Email A/B Testing</Text>
        <Text>RSS-to-Email</Text>
        <Select bgColor="#4959C8" color="black"   border="none" placeholder='Show More'>
        <option color="black" value='option1'>Option 1</option>
  <option border="none" value='option2'>Option 2</option>
  <option border="none" value='option3'>Option 3</option>
  <option color="black" value='option4'>Option 4</option>
  <option border="none" value='option5'>Option 5</option>
  <option border="none" value='option6'>Option 6</option>
        </Select>
    </VStack>
    <VStack color="white">
        <Text fontWeight="bold">Integrations</Text>
        <Text>Zapier Integration</Text>
        <Text>Xero Integration</Text>
        <Text>Mailgun Integration</Text>
        <Text>Mandrill Integration</Text>
        <Text>Postmark Integration</Text>
        <Text>Sendgrid Integration</Text>
        <Text>PieSync Integration</Text>
        <Select bgColor="#4959C8" color="black"   border="none" placeholder='Show More'>
        <option color="black" value='option1'>Option 1</option>
  <option border="none" value='option2'>Option 2</option>
  <option border="none" value='option3'>Option 3</option>
  <option color="black" value='option4'>Option 4</option>
  <option border="none" value='option5'>Option 5</option>
  <option border="none" value='option6'>Option 6</option>
        </Select>
    </VStack>
    <VStack color="white">
        <Text fontWeight="bold">Alternatives</Text>
        <Text>Infusionsoft Alternative</Text>
        <Text>Drip Alternative</Text>
        <Text>ActiveCampaign Alternative</Text>
        <Text>Insightly Alternative</Text>
        <Text>Aweber Alternative</Text>
        <Text>HubSpot Alternative</Text>
        <Text>Agile CRM Alternative</Text>
        <Select bgColor="#4959C8" color="black"   border="none" placeholder='Show More'>
        <option color="black" value='option1'>Option 1</option>
  <option border="none" value='option2'>Option 2</option>
  <option border="none" value='option3'>Option 3</option>
  <option color="black" value='option4'>Option 4</option>
  <option border="none" value='option5'>Option 5</option>
  <option border="none" value='option6'>Option 6</option>
        </Select>
    </VStack>
    <VStack color="white">
        <Text fontWeight="bold">Solutions</Text>
        <Text>Wordpress Plugin</Text>
        <Text>Email Tracker</Text>
        <Text>Real Estate CRM</Text>
        <Text>CRM for Non-profits</Text>
        <Text>Call Center CRM</Text>
        <Text>Cloud CRM</Text>
        <Text>Developers</Text>
        <Select bgColor="#4959C8"  color="black"  border="none" placeholder='Show More'>
        <option color="black" value='option1'>Option 1</option>
  <option border="none" value='option2'>Option 2</option>
  <option border="none" value='option3'>Option 3</option>
  <option color="black" value='option4'>Option 4</option>
  <option border="none" value='option5'>Option 5</option>
  <option border="none" value='option6'>Option 6</option>
        </Select>
    </VStack>
    <VStack color="white">
        <Text fontWeight="bold">Sales & Engage Prospects</Text>
        <Text>Email Sequences</Text>
        <Text>Web Forms</Text>
        <Text>Landing Pages</Text>
        <Text>Marketing Automation</Text>
        <Text>Push Notifications</Text>
        <Text>Video Marketing Templates</Text>
        <Text>Influencers</Text>
        <Select bgColor="#4959C8" color="black"   border="none" placeholder='Show More'>
        <option color="black" value='option1'>Option 1</option>
  <option border="none" value='option2'>Option 2</option>
  <option border="none" value='option3'>Option 3</option>
  <option color="black" value='option4'>Option 4</option>
  <option border="none" value='option5'>Option 5</option>
  <option border="none" value='option6'>Option 6</option>
        </Select>
    </VStack>
   
</HStack>

<hr style={{
    marginTop:"2rem"
}}/>
<Box ml="123px" mt="3rem">
    <HStack>
<Box>
    <img height="30" width="200px" src="https://cdn5.engagebay.com/new/assets/img/engagebay-logo-white.svg" alt="" />
    <Text color="white">One platform for all your Marketing, Sales, and Support teams.</Text>
    <HStack gap="20px" >
<img  height="20px" width="20px" src="https://cdn-icons.flaticon.com/png/128/2504/premium/2504903.png?token=exp=1658503303~hmac=fff0f314ca2b198d728eda6ec207260b" alt="" /> 
<img  height="20px" width="20px" src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1658503686~hmac=4ce0ce4ad60af07010e77a0980d110a7" alt="" /> 
<img  height="20px" width="20px" src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="" /> 
<img  height="20px" width="20px" src="https://cdn-icons-png.flaticon.com/128/1384/1384028.png" alt="" /> 
<img  height="20px" width="20px" src="https://cdn-icons-png.flaticon.com/128/174/174855.png" alt="" /> 
<Text color="white">Legal | Terms of Service | Privacy Policy</Text>
    </HStack>
</Box>

<Box justifyContent="center" justifyItems="flex-start" color="white" marginLeft="75px">
<Text>
EngageBay Inc.,1007 North Orange Street 4th Floor #180 Wilmington, DE 19801
</Text>
<Text>
    support@engagebay.com , +1.(877).509.3570
    </Text>
<Text>© EngageBay 2022. All Rights Reserved.
</Text>

    </Box>
    </HStack>
</Box>
</Box>  
      )
}

export default Footer