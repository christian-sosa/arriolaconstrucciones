import React, { useState } from "react"
import {
  Container,
  Box,
  Text,
  Stack,
  Image,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react"

const CarritoProductos = ({
  producto,
  productos,
  setProductos,
  id,
  total,
  setTotal,
  setCantidad,
  cantidad,
}) => {
  const [valor, setValor] = useState(1)
  const deleteProducto = () => {
    const newProductos = productos.filter((produc, i) => i !== id)
    setProductos(newProductos)
    setTotal(total - producto.precio)
    setCantidad(cantidad - 1)
  }
  const deleteProducto2 = () => {
    setProductos(undefined)
    setTotal(0)
    setCantidad(cantidad - 1)
  }
  const handleChange1 = (value) => {
    setValor(value)
    value >= valor
      ? setTotal(total + producto.precio)
      : setTotal(total - producto.precio)

    value >= valor
      ? (productos[id].cantidad = productos[id].cantidad + 1)
      : (productos[id].cantidad = productos[id].cantidad - 1)
    setProductos(productos)
  }
  const handleChange2 = (value) => {
    setValor(value)
    setTotal(productos[0].precio * value)
    value >= valor
      ? (productos[0].cantidad = productos[0].cantidad + 1)
      : (productos[0].cantidad = productos[0].cantidad - 1)
    setProductos(productos)
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
              <Box>
                <NumberInput
                  size="md"
                  maxW={24}
                  min={0}
                  defaultValue={productos[0].cantidad}
                  onChange={handleChange2}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
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
              <Box>
                <NumberInput
                  size="md"
                  maxW={24}
                  defaultValue={producto.cantidad}
                  onChange={handleChange1}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
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
