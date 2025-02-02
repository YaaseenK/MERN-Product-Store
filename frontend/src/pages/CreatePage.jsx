import { Box, Container, Heading, Input, useColorModeValue, VStack } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
    const [newProductm, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
    });

    return (
        <Container manW={"container.sm"}>
            <VStack
                spacing={8}
            >
                <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
                    Create New Product
                </Heading>

                <Box
                w={"full"} bg={useColorModeValue("white", "grey.800")}
                p={6} rounded={"lg"} shadow={"md"}
                >
                    <VStack spacing={4}>
                        <Input
                            placeholder="Product Name"
                        />
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage;

