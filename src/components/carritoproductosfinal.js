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

const CarritoProductosFinal = ({
  producto,
  productos,
  setProductos,
  id,
  total,
  setTotal,
}) => {
  return (
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
              <Text>hola</Text>
            </Box>
          </Stack>
        </Box>
        <Box width="20%" borderBottom="1px">
          <Text>15</Text>
        </Box>
        <Box width="30%" borderBottom="1px">
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <NumberInput size="md" maxW={24} defaultValue={1}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Box>
            <Box>
              <IconButton
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
  )
}

export default CarritoProductosFinal
