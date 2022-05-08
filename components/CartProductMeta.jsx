import {
  Box,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiGift } from "react-icons/fi";
import { Rating } from "./Rating";

export const CartProductMeta = (props) => {
  const { isGiftWrapping = true, image, name, rating } = props;
  return (
    <Stack direction="row" spacing={[5, 10]} width="full">
      <Image
        rounded="lg"
        width="110px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>
          <HStack>
            <Rating defaultValue={Math.ceil(rating.rate)} size="sm" />
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              {rating.count} Reviews
            </Text>
          </HStack>
        </Stack>
        {isGiftWrapping && (
          <HStack spacing="1" mt="3" color="gray.500">
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )}
      </Box>
    </Stack>
  );
};
