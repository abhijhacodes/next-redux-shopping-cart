import {
  Box,
  Button,
  HStack,
  Image,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

import { Rating } from "./Rating";
import { useDispatch } from "react-redux";
import { add } from "../redux/features/cartSlice";

export const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { product, rootProps } = props;
  const { image, title, price, rating } = product;

  const addToCart = () => {
    dispatch(add(product));
  };

  return (
    <Stack
      marginBottom={"2rem"}
      spacing={useBreakpointValue({ base: "4", md: "5" })}
      {...rootProps}
    >
      <Box position="relative">
        <Image
          src={image}
          alt={title}
          height="200px"
          width="100%"
          draggable="false"
          fallback={<Skeleton />}
          borderRadius={useBreakpointValue({ base: "md", md: "xl" })}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {title.substring(0, 20)}
          </Text>
          <Text
            as="span"
            fontWeight="semibold"
            color={useColorModeValue("gray.800", "gray.100")}
          >
            ${price}
          </Text>
        </Stack>
        <HStack>
          <Rating defaultValue={Math.ceil(rating.rate)} size="sm" />
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            {rating.count} Reviews
          </Text>
        </HStack>
      </Stack>
      <Stack align="center">
        <Button colorScheme="blue" isFullWidth onClick={addToCart}>
          Add to cart
        </Button>
      </Stack>
    </Stack>
  );
};
