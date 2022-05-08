import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { CartOrderSummary } from "../components/CartOrderSummar";
import { CartItem } from "../components/CartItem";
import { NavItem } from "../components/Header";
import NextLink from "next/link";

export default function Cart() {
  const products = useSelector((state) => state.cart);

  return (
    <Box
      minH="90vh"
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({products.length} items)
          </Heading>

          <Stack spacing="6">
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Stack>
        </Stack>
        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary products={products} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <NextLink href="/" passHref>
              <NavItem key="continue">Continue Shopping</NavItem>
            </NextLink>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
}
