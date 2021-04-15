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
  produ,
  total,
  setTotal,
  productos,
  setProductos,
  cantidad,
  setCantidad,
}) => {
  const handleClick = () => {
    setTotal(total + produ.precio)
    var array = []
    const newProduct = {
      nombre: produ.nombre,
      precio: produ.precio,
      cantidad: produ.cantidad,
      logo: produ.logo,
      descripcion: produ.descripcion,
    }
    productos === undefined
      ? setProductos(array.concat(newProduct))
      : setProductos(productos.concat(newProduct))
    setCantidad(cantidad + 1)
  }
  return (
    <Box width="100%" display="flex" justifyContent="center" paddingTop="2">
      <Box width="85%" className="box" rounded="lg">
        <Heading textAlign="center" fontSize="4xl">
          {produ.nombre}
        </Heading>
        <Container centerContent>
          <Image
            display="flex"
            justifyContent="center"
            src="https://via.placeholder.com/650"
          ></Image>
          <p>{produ.descripcion}</p>
        </Container>
        <Stack direction="row" justifyContent="space-between">
          <Text fontSize="medium">{produ.precio}</Text>
          <Button onClick={handleClick} paddingRight="2" colorScheme="yellow">
            AÑADIR AL CARRITO
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Product
