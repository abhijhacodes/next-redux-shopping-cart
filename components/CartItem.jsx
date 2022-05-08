import {
  CloseButton,
  Flex,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { CartProductMeta } from "./CartProductMeta";
import { useDispatch } from "react-redux";
import { remove } from "../redux/features/cartSlice";

export const CartItem = (props) => {
  const { product, rootProps } = props;
  const { id, image, title, price, rating } = product;
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(id));
  };

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={title.substring(0, 20)}
        image={image}
        rating={rating}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Text
          as="span"
          fontWeight="semibold"
          color={useColorModeValue("gray.800", "gray.100")}
        >
          ${price}
        </Text>
        <CloseButton
          size="lg"
          _hover={{
            color: useColorModeValue("red.300", "red.600"),
            bg: useColorModeValue("blue.600", "blue.200"),
          }}
          aria-label={`Delete ${title} from cart`}
          onClick={removeFromCart}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link
          fontSize="sm"
          textDecor="underline"
          as="button"
          onClick={removeFromCart}
        >
          Delete
        </Link>
        <Text
          as="span"
          fontWeight="semibold"
          color={useColorModeValue("gray.800", "gray.100")}
        >
          ${price}
        </Text>
      </Flex>
    </Flex>
  );
};
