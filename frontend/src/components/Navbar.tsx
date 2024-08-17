import {
  Box,
  Flex,
  VStack,
  HStack,
  Button,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Divider,
  AbsoluteCenter
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  IoLogoGithub,
  IoIosMail,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import { underlineAnimationStyles, disableWobbling } from "../utils/animation";

interface navItems {
  page: string;
  link: string;
}

const navItems = [
  {
    page: "Home",
    link: "/",
  },
  {
    page: "Skills",
    link: "/skills",
  },
  {
    page: "Project",
    link: "/project",
  },
  {
    page: "Photography",
    link: "/photography",
  },
  {
    page: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Flex
        alignItems={"center"}
        justify={{ base: "space-between", md: "center" }}
      >
        <IconButton
          icon={<HamburgerIcon boxSize={8} />}
          bg={"transparent"}
          display={{ base: "flex", md: "none" }}
          _focus={{ boxShadow: "none" }}
          _active={{ transform: "scale(1)" }}
          _hover={{ transform: "scale(1)" }}
          onClick={onOpen}
          aria-label={""}
        />
        <Button
          sx={disableWobbling}
          bg={"transparent"}
          width={"auto"}
          justifyContent={"center"}
          textAlign={"center"}
          fontStyle={"italic"}
          fontSize={"24px"}
          mb={"10px"}
          onClick={() => navigate("/")}
        >
          Snudhana
        </Button>
      </Flex>
      <HStack
        justify={"space-around"}
        pt={"10px"}
        display={{ base: "none", md: "flex" }}
      >
        {navItems.map((item) => (
          <Button
            sx={underlineAnimationStyles}
            width={"10%"}
            onClick={() => navigate(item.link)}
          >
            {item.page}
          </Button>
        ))}
      </HStack>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent width={"100%"} p={"30px"}>
          <IconButton
            icon={<CloseIcon boxSize={5} />}
            bg={"transparent"}
            _focus={{ boxShadow: "none" }}
            _active={{ transform: "scale(1)" }}
            _hover={{ transform: "scale(1)" }}
            onClick={onClose}
            justifyContent={"flex-start"}
            aria-label={""}
          />
          <DrawerBody>
            <VStack gap={"20px"}>
              {navItems.map((item) => (
                <Button
                  sx={underlineAnimationStyles}
                  width={"15%"}
                  onClick={() => navigate(item.link)}
                >
                  {item.page}
                </Button>
              ))}
            </VStack>
            <Box position="relative">
              <Divider mt={'50px'} color={'black'} border={'1px solid'}/>
              <AbsoluteCenter bgColor={'white'} px="4">
                Social
              </AbsoluteCenter>
            </Box>
            <HStack
              spacing="24px"
              pt={'30px'}
              color={"#404040"}
              display={"flex"}
              justify={"center"}
            >
              <Link to="https://github.com/S-nudhana">
                <IconButton
                  icon={<IoLogoGithub size={"30px"} />}
                  bgColor={"transparent"}
                  _focus={{ boxShadow: "none" }}
                  _active={{ transform: "scale(1)" }}
                  _hover={{ transform: "scale(1)", color: "white" }}
                  aria-label={""}
                />
              </Link>
              <Link to="mailto:nu37317@gmail.com">
                <IconButton
                  icon={<IoIosMail size={"30px"} />}
                  bgColor={"transparent"}
                  _focus={{ boxShadow: "none" }}
                  _active={{ transform: "scale(1)" }}
                  _hover={{ transform: "scale(1)", color: "white" }}
                  aria-label={""}
                />
              </Link>
              <Link to="https://www.instagram.com/nnaeeeeeeeee/">
                <IconButton
                  icon={<IoLogoInstagram size={"30px"} />}
                  bgColor={"transparent"}
                  _focus={{ boxShadow: "none" }}
                  _active={{ transform: "scale(1)" }}
                  _hover={{ transform: "scale(1)", color: "white" }}
                  aria-label={""}
                />
              </Link>
              <Link to="https://www.facebook.com/profile.php?id=100027228291495">
                <IconButton
                  icon={<IoLogoFacebook size={"30px"} />}
                  bgColor={"transparent"}
                  _focus={{ boxShadow: "none" }}
                  _active={{ transform: "scale(1)" }}
                  _hover={{ transform: "scale(1)", color: "white" }}
                  aria-label={""}
                />
              </Link>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
