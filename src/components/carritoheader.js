import React from "react"
import { Container, Box, Text, Heading, Stack } from "@chakra-ui/react"
import "../App.css"

const CarritoHeader = () => {
  return (
    <Container padding="50" bg="teal" maxW="container.2xl">
      <Container centerContent>
        <Heading>CARRITO</Heading>
      </Container>
      <Box width="100%">
        <Stack direction="row">
          <Box width="50%" borderBottom="1px">
            <Text>Producto</Text>
          </Box>
          <Box width="20%" borderBottom="1px">
            <Text>Precio</Text>
          </Box>
          <Box width="30%" borderBottom="1px">
            <Text>Cantidad</Text>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default CarritoHeader
