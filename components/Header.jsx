import {
  Box,
  Flex,
  Text,
  HStack,
  IconButton,
  Button,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { IoMoon, IoSunny } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import NextLink from "next/link";
import { BsCartCheck } from "react-icons/bs";
import { useSelector } from "react-redux";

const Links = [
  {
    label: "Products",
    href: "/",
  },
  {
    label: "Cart",
    href: "/cart",
  },
];

export const NavItem = ({ children, ...rest }) => {
  return (
    <Flex
      align="center"
      p="2"
      mx="4"
      borderRadius="lg"
      cursor="pointer"
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const items = useSelector((state) => state.cart);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} mb={16}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          as={"header"}
          pos="fixed"
          top="0"
          w={"full"}
          boxShadow={"sm"}
          zIndex="999"
          css={{
            backdropFilter: "saturate(180%) blur(5px)",
            backgroundColor: useColorModeValue(
              "rgba(255, 255, 255, 0.7)",
              "rgba(26, 32, 44, 0.9)"
            ),
          }}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack ml={12} spacing={8} alignItems={"center"}>
            <HStack>
              <IconButton
                size={["sm", "md", "lg"]}
                as="logo"
                aria-label="Logo"
                icon={<FiShoppingCart fontSize="1.8rem" />}
              />
              <Text
                fontSize={["md", "lg", "xl"]}
                color={useColorModeValue("blue.600", "blue.200")}
              >
                Redux Shopping
              </Text>
            </HStack>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NextLink href={link.href} key={link.label} passHref>
                  <NavItem key={link.label}>{link.label}</NavItem>
                </NextLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} padding={4} mr={12}>
            <Button
              variant={"outline"}
              colorScheme={"blue"}
              size={"md"}
              mr={4}
              leftIcon={<BsCartCheck />}
              display={{ base: "none", md: "flex" }}
            >
              Items in Cart: {items.length}
            </Button>
            <IconButton
              size={"lg"}
              variant={"ghost"}
              aria-label={"Toggle Color Mode"}
              onClick={toggleColorMode}
              mr={4}
              icon={
                colorMode == "light" ? (
                  <IoMoon size={18} />
                ) : (
                  <IoSunny size={18} />
                )
              }
            />
            <IconButton
              as="a"
              href="https://github.com/abhijhacodes/next-redux-shopping-cart"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.8rem" />}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NextLink href={link.href} key={link.label} passHref>
                  <NavItem key={link.label}>{link.label}</NavItem>
                </NextLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
