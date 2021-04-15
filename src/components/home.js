import React, { useState } from "react"
import "../App.css"
import Header from "./header"
import Product from "./product"
import CarritoHeader from "./carritoheader"
import CarritoFin from "./carritofin"
import CarritoProductos from "./carritoproductos"
import {
  ChakraProvider,
  Box,
  Stack,
  Grid,
  IconButton,
  Image,
} from "@chakra-ui/react"

const Home = () => {
  var AllProductos = [
    {
      nombre: "pelota",
      precio: 10,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "botin",
      precio: 20,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "zapatilla",
      precio: 30,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "remera",
      precio: 40,
      cantidad: 1,
      descripcion: "para patear",
    },
  ]
  var AllProductos2 = [
    {
      nombre: "pelota2",
      precio: 10,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "botin2",
      precio: 20,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "zapatilla2",
      precio: 30,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "remera2",
      precio: 40,
      cantidad: 1,
      descripcion: "para patear",
    },
  ]
  var AllProductos3 = [
    {
      nombre: "pelota3",
      precio: 10,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "botin3",
      precio: 20,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "zapatilla3",
      precio: 30,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "remera3",
      precio: 40,
      cantidad: 1,
      descripcion: "para patear",
    },
  ]
  var AllProductos4 = [
    {
      nombre: "pelota4",
      precio: 10,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "botin4",
      precio: 20,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "zapatilla4",
      precio: 30,
      cantidad: 1,
      descripcion: "para patear",
    },
    {
      nombre: "remera4",
      precio: 40,
      cantidad: 1,
      descripcion: "para patear",
    },
  ]
  const [productosTodos, setProductosTodos] = useState(AllProductos) //catalogo completo
  const [total, setTotal] = useState(0)
  const [productos, setProductos] = useState() //productos en carrito
  const [paginate, setPaginate] = useState(1)
  const [cantidad, setCantidad] = useState(0)
  console.log(productos)
  console.log(total)
  const paginateUp = () => {
    paginate === 4 ? setPaginate(4) : setPaginate(paginate + 1)
    console.log(paginate) //si paginate llega al maximo no puede incrementar
    if (paginate === 1) {
      setProductosTodos(AllProductos2)
    }
    if (paginate === 2) {
      setProductosTodos(AllProductos3)
    }
    if (paginate === 3) {
      setProductosTodos(AllProductos4)
    }
  }
  const paginateDown = () => {
    paginate === 1 ? setPaginate(1) : setPaginate(paginate - 1) // si paginate es 1 no puede ir a 0
    if (paginate === 2) {
      setProductosTodos(AllProductos)
    }
    if (paginate === 3) {
      setProductosTodos(AllProductos2)
    }
    if (paginate === 4) {
      setProductosTodos(AllProductos3)
    }
  }
  return (
    <ChakraProvider>
      <Box w="100%">
        <Header></Header>
        <Box width="100%">
          <Stack direction="row">
            <Grid templateColumns="repeat(2, 1fr)" gap={5} width="100%">
              {productosTodos.map((produ, i) => (
                <Product
                  key={i}
                  produ={produ}
                  total={total}
                  setTotal={setTotal}
                  productos={productos}
                  setProductos={setProductos}
                  setCantidad={setCantidad}
                  cantidad={cantidad}
                ></Product>
              ))}
            </Grid>
          </Stack>
        </Box>
        <Box width="100%">
          <Stack direction="row">
            <Stack width="100%" justifyContent="end">
              <IconButton
                onClick={paginateDown}
                colorScheme="teal"
                variant="link"
                icon={
                  <Image src="https://icongr.am/fontawesome/arrow-left.svg?size=77&color=000000"></Image>
                }
              ></IconButton>
            </Stack>
            <Stack width="100%">
              <IconButton
                onClick={paginateUp}
                colorScheme="teal"
                variant="link"
                icon={
                  <Image src="https://icongr.am/fontawesome/arrow-right.svg?size=77&color=000000"></Image>
                }
              ></IconButton>
            </Stack>
          </Stack>
        </Box>
        <CarritoHeader></CarritoHeader>
        {productos ? (
          productos[1] === undefined ? (
            <CarritoProductos
              producto={productos}
              productos={productos}
              setProductos={setProductos}
              id={999}
              setTotal={setTotal}
              total={total}
              setCantidad={setCantidad}
              cantidad={cantidad}
            ></CarritoProductos>
          ) : (
            productos.map((producto, i) => (
              <CarritoProductos
                key={i}
                producto={producto}
                productos={productos}
                setProductos={setProductos}
                id={i}
                setTotal={setTotal}
                total={total}
                cantidad={cantidad}
                setCantidad={setCantidad}
              ></CarritoProductos>
            ))
          )
        ) : (
          <div></div>
        )}
        <CarritoFin
          total={total}
          cantidad={cantidad}
          productos={productos}
        ></CarritoFin>
      </Box>
    </ChakraProvider>
  )
}
export default Home
