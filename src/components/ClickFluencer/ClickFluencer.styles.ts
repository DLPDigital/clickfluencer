import { chakra, Box } from "@chakra-ui/react"

export const Container = chakra(Box, {
  baseStyle: {
    maxW: "900px",
    textAlign: "center",
    mx: "auto",
    px: {
      base: "2rem",
      md: "0",
    },
  },
})

export const Title = chakra(Box, {
  baseStyle: {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
  },
})

export const Alert = chakra(Box, {
  baseStyle: {
    backgroundColor: "yellow",
    padding: "1rem",
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.5rem",
    zIndex: "1",
    animation: "fadeIn 0.5s ease-out",
  },
})
