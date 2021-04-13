import React from "react"
import { Container, Box, Text, Heading, Stack } from "@chakra-ui/react"
import "../App.css"

const Header = () => {
  return (
    <Container centerContent>
      <Box
        w="450px"
        h="150px"
        className="bg-header"
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="25"
      >
        <Stack direction="column">
          <Text textAlign="center" paddingBottom="25">
            <strong>Arriola Construcciones</strong>
          </Text>
          <Heading textAlign="center">
            <strong>Arriola Construcciones</strong>
          </Heading>
        </Stack>
      </Box>
    </Container>
  )
}
export default Header
