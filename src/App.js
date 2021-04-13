import React, { useState } from "react"
import "./App.css"
import Header from "./components/header"
import Product from "./components/product"
import CarritoHeader from "./components/carritoheader"
import CarritoFin from "./components/carritofin"
import { ChakraProvider, Container, Box, Stack, Grid } from "@chakra-ui/react"
import CarritoProductos from "./components/carritoproductos"

function App() {
  const AllProductos = [
    {
      nombre: "pelota",
      precio: 10,
      descripcion: "para patear",
    },
    {
      nombre: "botin",
      precio: 20,
      descripcion: "para patear",
    },
    {
      nombre: "zapatilla",
      precio: 30,
      descripcion: "para patear",
    },
    {
      nombre: "remera",
      precio: 40,
      descripcion: "para patear",
    },
  ]
  const [productosTodos, setProductosTodos] = useState(AllProductos) //catalogo completo
  const [total, setTotal] = useState(0)
  const [productos, setProductos] = useState() //productos en carrito
  console.log(productos)
  return (
    <ChakraProvider>
      <Box w="100%">
        <Header></Header>
        <Box width="100%">
          <Stack direction="row" bg="red">
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={5}
              bg="blue"
              width="100%"
            >
              {productosTodos.map((produ, i) => (
                <Product
                  key={i}
                  nombre="pelota"
                  precio={150}
                  descripcion="sirve para patear"
                  total={total}
                  setTotal={setTotal}
                  productos={productos}
                  setProductos={setProductos}
                ></Product>
              ))}
            </Grid>
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
            ></CarritoProductos>
          ) : (
            productos.map((producto, i) => (
              <CarritoProductos
                key={i}
                producto={producto}
                productos={productos}
                setProductos={setProductos}
                id={i}
              ></CarritoProductos>
            ))
          )
        ) : (
          <div></div>
        )}
        <CarritoFin total={total}></CarritoFin>
      </Box>
    </ChakraProvider>
  )
}

export default App
