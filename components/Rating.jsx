import { HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { FaStar } from "react-icons/fa";

export const Rating = (props) => {
  const { defaultValue = 0, max = 5, size = "md", rootProps } = props;
  const color = useColorModeValue("gray.200", "gray.600");
  const activeColor = useColorModeValue("green.500", "green.200");
  return (
    <HStack spacing="0.5" {...rootProps}>
      {Array.from({
        length: max,
      })
        .map((_, index) => index + 1)
        .map((index) => (
          <Icon
            key={index}
            as={FaStar}
            fontSize={size}
            color={index <= defaultValue ? activeColor : color}
          />
        ))}
    </HStack>
  );
};
