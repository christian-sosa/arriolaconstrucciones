import React from "react"
import {
  Container,
  Box,
  Text,
  Heading,
  Stack,
  Button,
  Image,
} from "@chakra-ui/react"
import "../App.css"

const Product = ({
  nombre,
  precio,
  logo,
  descripcion,
  total,
  setTotal,
  productos,
  setProductos,
}) => {
  const handleClick = () => {
    setTotal(total + precio)
    var array = []
    const newProduct = {
      nombre: nombre,
      precio: precio,
      logo: logo,
      descripcion: descripcion,
    }
    productos === undefined
      ? setProductos(array.concat(newProduct))
      : setProductos(productos.concat(newProduct))
  }
  return (
    <Box width="100%" display="flex" justifyContent="center" paddingTop="2">
      <Box width="85%" bg="grey" rounded="lg">
        <Heading textAlign="center" fontSize="4xl">
          {nombre}
        </Heading>
        <Container centerContent>
          <Image
            display="flex"
            justifyContent="center"
            src="https://via.placeholder.com/650"
          ></Image>
          <p>{descripcion}</p>
        </Container>
        <Stack direction="row" justifyContent="space-between">
          <Text fontSize="medium">{precio}</Text>
          <Button onClick={handleClick} paddingRight="2" colorScheme="yellow">
            AÑADIR AL CARRITO
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Product
