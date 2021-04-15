import React, { useState } from "react"
import { Container, Box, Text, Heading, Stack, Button } from "@chakra-ui/react"

const CarritoFin = ({ total, cantidad, productos }) => {
  const [url, setUrl] = useState(0)
  const handleClick = (e) => {
    e.preventDefault()
    var mensaje =
      "Hola%20buenas%20tardes,%20quiero%20comprar%20lo%20siguiente:%20"
    var mensaje2 = ""
    for (var i = 0; i < cantidad; i++) {
      mensaje =
        mensaje +
        (i + 1) +
        ")%20" +
        productos[i].nombre +
        "%20cantidad:%20" +
        productos[i].cantidad +
        "%20"
    }
    var mensaje3 = "https://wa.me/5491161244217/?text="
    var mensaje4 = "%20.%20El%20total%20es:%20" + total
    var mensajeFinal = mensaje3 + mensaje + mensaje2 + mensaje4
    console.log(mensajeFinal)
    setUrl(mensajeFinal)
  }
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
          <form action={url} onSubmit={handleClick}>
            <Button type="submit" colorScheme="yellow">
              Comprar
            </Button>
          </form>
        </Stack>
      </Box>
    </Container>
  )
}

export default CarritoFin
