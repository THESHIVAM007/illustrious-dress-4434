import { Box, Button, HStack, Image, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { CheckCircleIcon} from '@chakra-ui/icons'
import Customer from './Customer'
import Footer from './Footer'

const Home = () => {
  return (
    <Box>

        <Box style={{
          backgroundColor:"#F4EBE3"
        }}>
            <Box mt="3rem" fontSize="7xl" fontWeight="semibold">
                <Text> Market better. Sell faster.</Text>
                <Text>Support smarter</Text>
                <Text mt="1rem" fontSize="3xl" fontWeight="light" >One platform for all your Marketing, Sales, and Support teams</Text>
            </Box>
            <Box mt="1rem"> 
                <Input className='inputWithButton' style={{
                    width:"630px"
                    , height:"76px",
                    borderRadius:"50px",
                    background:"white",
                    border:"2px solid #FF7545",
                    fontSize:"5xl"
                  }} placeholder='Your Email Address'/>
                <Button style={{
                  backgroundColor:"#EF6333",
                  borderRadius:"50px",
                  width:"150px",
                  height:"70px",
                  color:"white",
                  padding:".1rem"
                }}>Get Started</Button>
            </Box>
            <Box mt="1rem" display="flex" gap="1rem" ml="37%">
                <Text fontWeight="semibold" > <CheckCircleIcon color="#7A51B6" /> Free for 15 users</Text>
                <Text fontWeight="semibold"> <CheckCircleIcon color="#7A51B6"/> No credit card required</Text>

            </Box>
            <Box>
                <Image src='https://cdn5.engagebay.com/new/assets/img/banner-image.svg'/>
           {/* <img src="https://cdn5.engagebay.com/new/assets/img/banner-image.svg" alt="engagebay" /> */}
            </Box>
            <Box mt="2rem" style={{
              backgroundColor:"white"
            }}>
<Box justifyContent="center" justifyItems="center"  alignItems="center">

<HStack   justifyContent="center" alignItems="center"
>
    <Box mt="3rem" >
    <img class="img-fluid lozad" alt="Neilpatel" width="151" height="47" data-src="https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png" src="https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png" data-loaded="true"/>
    </Box>
    <Box mt="3rem" ><img class="img-fluid lozad" alt="Forbs" width="151" height="47" data-src="https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png" src="https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png" data-loaded="true"/></Box>
    <Box mt="3rem" ><img class="img-fluid lozad" alt="Inc" width="151" height="47" data-src="https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png" src="https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png" data-loaded="true"/></Box>
    <Box mt="3rem" ><img class="img-fluid lozad" alt="Enterpreneur" width="151" height="47" data-src="https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png" src="https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png" data-loaded="true"/></Box>
    <Box mt="3rem" ><img class="img-fluid lozad" alt="Techcrunch" width="151" height="47" data-src="https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png" src="https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png" data-loaded="true"/></Box>
    <Box mt="3rem" ><img class="img-fluid lozad" alt="Jeffbullas" width="151" height="47" data-src="https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png" src="https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png" data-loaded="true"/></Box>
    <Box mt="3rem" ><img class="img-fluid lozad" alt="Business" width="151" height="47" data-src="https://cdn5.engagebay.com/new/assets/img/p-logos/business.png" src="https://cdn5.engagebay.com/new/assets/img/p-logos/business.png" data-loaded="true"/></Box>
</HStack>
</Box>
<hr
  style={{
    background: 'black',
    color: 'black',
    borderColor: 'black',
    width:"80%",
    marginLeft:"10%"
  }}
/>

</Box>
<Box>
    <Text  mt="3rem" fontSize="5xl" fontWeight="semibold">Single Solution for All Your Activities</Text>
    <Text mt="1rem" fontSize="2xl" fontWeight="light" >Identify new opportunities, convert visitors, deliver customer happiness, and more!</Text>
</Box>
<br/>
<br/>
<br/>
<Box>

<HStack  gap="2rem">
<Box ml="6rem"  height="400px" border="1px solid gray" w="40%" >
<Box display="flex" >
    <Box mt="20px"  justifyItems="start" alignContent="start" mr="10px">
<Text fontSize="4xl">
CRM Software </Text>  <br/>

  <Text  alignItems="left"  ml=".5rem" color="gray">Store unlimited contacts and build stronger </Text>
   <Text alignItems="left" ml=".5rem" color="gray">
    relationships by keeping track of all your customer
    </Text> 
    <Text ml=".5rem" color="gray"> details in one place</Text>
    </Box>
    <Box mt="10px">
<img  width="175px" height="175px" alt="img" src="https://cdn5.engagebay.com/new/assets/img/icons/crm.svg" />
</Box>
   </Box>
   <hr
  style={{
    background: 'gray',
    color: 'gray',
    width:"80%",
    marginLeft:"10%",
    marginTop:"10px"
  }}
/>
<Box>
<Text fontSize="2xl" fontWeight="semibold">
    Popular Feature
</Text>
<SimpleGrid mt="15px" columns={2} spacing={10}>
  <Box > 
  <CheckCircleIcon mr="5px" color="#573098"   />
  Contact Management
  </Box>
  <Box >
  <CheckCircleIcon mr="5px" color="#573098"   />
    Deal Management
  </Box>
  <Box>
  <CheckCircleIcon mr="5px" color="#573098"   />
  Sales Automation
  </Box>
  <Box >
  <CheckCircleIcon mr="5px" color="#573098"   />
  Appointment Scheduling
  </Box>
  
</SimpleGrid>
<Button mt=".5rem"
style={{
  color:"white",
  width:"175px",
  height:"50px",
  backgroundColor:"#573098"
}}>Get Started</Button>

</Box>
</Box>
<Box border="1px groove  lightgray" w="40%" height="400px">
<Box display="flex" >
    <Box mt="20px"  justifyItems="start" alignContent="start" mr="10px">
<Text fontSize="4xl">
Marketing Automation </Text>  <br/>

  <Text  alignItems="left"  ml=".5rem" color="gray">Save time by automating your marketing processes </Text>
   <Text alignItems="left" ml=".5rem" color="gray">
   and sending personalized messages to target
    </Text> 
    <Text ml=".5rem" color="gray"> audiences</Text>
    </Box>
    <Box mt="10px">
<img  width="175px" height="175px" alt="img" src="https://cdn5.engagebay.com/new/assets/img/icons/marketing-automation.svg" />
</Box>
   </Box>
   <hr
  style={{
    background: 'gray',
    color: 'gray',
    width:"80%",
    marginLeft:"10%",
    marginTop:"10px"
  }}
/>
<Box>
<Text fontSize="2xl" fontWeight="semibold">
    Popular Feature
</Text>
<SimpleGrid mt="15px" columns={2} spacing={10}>
  <Box > 
  <CheckCircleIcon mr="5px" color="#573098"   />
  Forms & Landing Pages
  </Box>
  <Box >
  <CheckCircleIcon mr="5px" color="#573098"   />
  Email Sequences
  </Box>
  <Box>
  <CheckCircleIcon mr="5px" color="#573098"   />
  Marketing Automation
  </Box>
  <Box >
  <CheckCircleIcon mr="5px" color="#573098"   />
  Email Template Builder
  </Box>
  
</SimpleGrid>
<Button mt=".5rem"
style={{
  color:"white",
  width:"175px",
  height:"50px",
  backgroundColor:"#573098"
}}>Get Started</Button>

</Box>
</Box>
</HStack>
</Box>


      <Box mt="2rem">
        <HStack  gap="2rem">
<Box ml="6rem"  height="400px" border="1px solid gray" w="40%" >
<Box display="flex" >
    <Box mt="20px"  justifyItems="start" alignContent="start" mr="10px">
<Text fontSize="4xl">
Helpdesk Software </Text>  <br/>

  <Text  alignItems="left"  ml=".5rem" color="gray">Resolve queries faster and deliver exceptional</Text>
   <Text alignItems="left" ml=".5rem" color="gray">
   support to delight your customers
    </Text> 
    
    </Box>
    <Box mt="10px">
<img  width="175px" height="175px" alt="img" src="https://cdn5.engagebay.com/new/assets/img/icons/helpdesk.svg" />
</Box>
   </Box>
   <hr
  style={{
    background: 'gray',
    color: 'gray',
    width:"80%",
    marginLeft:"10%",
    marginTop:"10px"
  }}
/>
<Box>
<Text fontSize="2xl" fontWeight="semibold">
    Popular Feature
</Text>
<SimpleGrid mt="15px" columns={2} spacing={10}>
  <Box > 
  <CheckCircleIcon mr="5px" color="#573098"   />
  Ticket Management
  </Box>
  <Box >
  <CheckCircleIcon mr="5px" color="#573098"   />
  Views
  </Box>
  <Box>
  <CheckCircleIcon mr="5px" color="#573098"   />
  Macro
  </Box>
  <Box >
  <CheckCircleIcon mr="5px" color="#573098"   />
  Ticket Automation
  </Box>
  
</SimpleGrid>
<Button mt=".5rem"
style={{
  color:"white",
  width:"175px",
  height:"50px",
  backgroundColor:"#573098"
}}>Get Started</Button>

</Box>
</Box>
<Box border="1px solid gray" w="40%" height="400px">
<Box display="flex" >
    <Box mt="20px"  justifyItems="start" alignContent="start" mr="10px">
<Text fontSize="4xl">
Live Chat Software </Text>  <br/>

  <Text  alignItems="left"  ml=".5rem" color="gray">Boost customer happiness and increase conversions </Text>
   <Text alignItems="left" ml=".5rem" color="gray">
   by offering instant help when your customers need
       </Text> 
    <Text ml=".5rem" color="gray"> it</Text>
    </Box>
    <Box mt="10px">
<img  width="175px" height="175px" alt="img" src="https://cdn5.engagebay.com/new/assets/img/icons/livechat.svg" />
</Box>
   </Box>
   <hr
  style={{
    background: 'gray',
    color: 'gray',
    width:"80%",
    marginLeft:"10%",
    marginTop:"10px"
  }}
/>
<Box>
<Text fontSize="2xl" fontWeight="semibold">
    Popular Feature
</Text>
<SimpleGrid mt="15px" columns={2} spacing={10}>
  <Box > 
  <CheckCircleIcon mr="5px" color="#573098"   />
  Instant Support
  </Box>
  <Box >
  <CheckCircleIcon mr="5px" color="#573098"   />
  Chat Form Customisation
  </Box>
  <Box>
  <CheckCircleIcon mr="5px" color="#573098"   />
  Shortcuts
  </Box>
  <Box >
  <CheckCircleIcon mr="5px" color="#573098"   />
  Notifications
  </Box>
  
</SimpleGrid>
<Button mt=".5rem"
style={{
  color:"white",
  width:"175px",
  height:"50px",
  backgroundColor:"#573098"
}}>Get Started</Button>

</Box>
</Box>
</HStack>
      </Box>
      <Customer/>
      <Footer/>

        </Box>
  </Box>
    
  )
}

export default Home