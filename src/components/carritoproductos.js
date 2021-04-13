import React from "react"
import {
  Container,
  Box,
  Text,
  Heading,
  Stack,
  Image,
  Button,
  IconButton,
} from "@chakra-ui/react"

const CarritoProductos = ({ producto, productos, setProductos, id }) => {
  const deleteProducto = () => {
    const newProductos = productos.filter((produc, i) => i !== id)
    setProductos(newProductos)
  }
  const deleteProducto2 = () => {
    setProductos(undefined)
  }
  const unico = (
    <Container padding="50" bg="teal" maxW="container.2xl">
      <Box width="100%">
        <Stack direction="row">
          <Box width="50%" borderBottom="1px">
            <Stack direction="row">
              <Box width="40%">
                <Image
                  boxSize="100px"
                  display="flex"
                  justifyContent="center"
                  src="https://via.placeholder.com/650"
                ></Image>
              </Box>
              <Box width="60%">
                <Text>{productos[0].nombre}</Text>
              </Box>
            </Stack>
          </Box>
          <Box width="20%" borderBottom="1px">
            <Text>{productos[0].precio}</Text>
          </Box>
          <Box width="30%" borderBottom="1px">
            <Stack direction="row" justifyContent="space-between">
              <Text>Cantidad</Text>
              <Box>
                <IconButton
                  onClick={deleteProducto2}
                  colorScheme="teal"
                  variant="link"
                  icon={
                    <Image src="https://icongr.am/fontawesome/close.svg?size=66&color=e62d2d"></Image>
                  }
                ></IconButton>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  )

  const ok = (
    <Container padding="50" bg="teal" maxW="container.2xl">
      <Box width="100%">
        <Stack direction="row">
          <Box width="50%" borderBottom="1px">
            <Stack direction="row">
              <Box width="40%">
                <Image
                  boxSize="100px"
                  display="flex"
                  justifyContent="center"
                  src="https://via.placeholder.com/650"
                ></Image>
              </Box>
              <Box width="60%">
                <Text>{producto.nombre}</Text>
              </Box>
            </Stack>
          </Box>
          <Box width="20%" borderBottom="1px">
            <Text>{producto.precio}</Text>
          </Box>
          <Box width="30%" borderBottom="1px">
            <Stack direction="row" justifyContent="space-between">
              <Text>Cantidad</Text>
              <Box>
                <IconButton
                  onClick={deleteProducto}
                  colorScheme="teal"
                  variant="link"
                  icon={
                    <Image src="https://icongr.am/fontawesome/close.svg?size=66&color=e62d2d"></Image>
                  }
                ></IconButton>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
  return id !== 999 ? ok : unico
}

export default CarritoProductos
