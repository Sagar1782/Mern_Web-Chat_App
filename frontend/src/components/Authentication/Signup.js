import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'


const Signup = () => {
    const [show,setShow]=useState(false);
    const [show1,setShow1]=useState(false);
    const [name,setName]=useState();
    const [email,setEmail]=useState();
     const [password,setPassword]=useState();
    const [confirmpassword,setConfirmpassword]=useState();
    const [pic,setPic]=useState();
    
    const handleClick = () => setShow(!show);

    const handleClick1 = () => setShow1(!show1);

    const postDetails= (pics) => {};

    const submitHandler = () => {};

  return (
    <VStack spacing='5px' color="black">

        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} />
        </FormControl>

        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
            type={show ? "text":"password"}
            placeholder='Enter Your Password'
             onChange={(e) => setPassword(e.target.value)} />
             <InputRightElement width="4.5rem">
             <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide":"Show"}
             </Button>

             </InputRightElement>
            </InputGroup>
            
        </FormControl>

        <FormControl id='confirmpassword' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
            <Input 
            type={show1 ? "text":"password"}
            placeholder='Confirm Password'
             onChange={(e) => setConfirmpassword(e.target.value)} />
             <InputRightElement width="4.5rem">
             <Button h="1.75rem" size="sm" onClick={handleClick1}>
                {show1 ? "Hide":"Show"}
             </Button>

             </InputRightElement>
            </InputGroup>
            
        </FormControl>

        <FormControl id='pic' >
            <FormLabel>Upload Your Picture</FormLabel>
            <Input 
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])} />
        </FormControl>

        <Button 
        colorScheme="blue"
        width="100%"
        style={{marginTop: 15}}
        onClick={submitHandler}
        >SignUp</Button>
    </VStack>
  );
};

export default Signup
