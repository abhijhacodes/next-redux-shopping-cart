import { Text, VStack, Button } from "@chakra-ui/react";
import { Products } from "../components/Products";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <VStack spacing={4}>
        <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl" mt={8}>
          Add Products to Cart for Shopping and See the cart items{" "}
          <NextLink href="/cart" passHref>
            <Button as={"a"} colorScheme="blue" variant="outline">
              here
            </Button>
          </NextLink>
        </Text>
        <Products />
      </VStack>
    </>
  );
}
