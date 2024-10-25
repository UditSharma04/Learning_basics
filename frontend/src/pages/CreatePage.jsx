import { Box, Button, Container, Heading, Input, useColorMode, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProuduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  const {createProduct} = useProductStore();

  const handleAddProduct =async() => {
    const {success,message} = await createProduct(newProduct);
    if(!success){
        toast({
            title:"Error",
            desciption:"error",
            status:"error",
            isClosable: true
        });
    } else {
        toast({
            title:"Success",
            desciption:message,
            status:"success",
            isClosable: true
        });
    }
    setNewProuduct({ name: "", price:"",image:""});
    
  }
  return (
    <Container maxW={"container.sm"}>
        <VStack
            spacing={8}
        >
            <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                Create New Product
            </Heading>

            <Box
              w={'full'}
              bg={useColorModeValue("white","gray.800")}
              p={6} rounded={'lg'} shadow={'md'}
            >
                <VStack spacing={4}>
                    <Input
                      placeholder='Proudct Name'
                      name='name'
                      value={newProduct.name}
                      onChange={(e) => {
                        setNewProuduct({...newProduct, name: e.target.value})
                      }}
                    />
                    <Input
                      placeholder='Price'
                      name='price'
                      type='number'
                      value={newProduct.price}
                      onChange={(e) => {
                        setNewProuduct({...newProduct, price: e.target.value})
                      }}
                    />
                    <Input
                      placeholder='Image URL'
                      name='image'
                      value={newProduct.image}
                      onChange={(e) => {
                        setNewProuduct({...newProduct, image: e.target.value})
                      }}
                    />

                    <Button colorScheme='blue' onClick={handleAddProduct} w="full">
                      Add Product
                    </Button>
                </VStack>
            </Box>
        </VStack>

    </Container>
  )
}

export default CreatePage