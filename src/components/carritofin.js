import React from "react"
import { Container, Box, Text, Heading, Stack, Button } from "@chakra-ui/react"

const CarritoFin = ({ total }) => {
  return (
    <Container
      paddingLeft="50"
      paddingRight="50"
      bg="teal"
      maxW="container.2xl"
    >
      <Box width="100%">
        <Stack direction="row" justifyContent="space-between">
          <Text>{total}</Text>
          <Button colorScheme="yellow">Comprar</Button>
        </Stack>
      </Box>
    </Container>
  )
}

export default CarritoFin
