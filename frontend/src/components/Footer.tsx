import { Flex, Text, IconButton, HStack } from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoIosMail,
  IoLogoInstagram,
  IoLogoFacebook,
} from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Flex
        bgColor={"black"}
        width={"100%"}
        flexDir={"column"}
        align={"center"}
      >
        <HStack spacing="24px" pt={"30px"} pb={"10px"}>
          <Link to="https://github.com/S-nudhana">
            <IconButton
              icon={<IoLogoGithub size={"30px"} />}
              color={"#D3D3D3"}
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
              color={"#D3D3D3"}
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
              color={"#D3D3D3"}
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
              color={"#D3D3D3"}
              bgColor={"transparent"}
              _focus={{ boxShadow: "none" }}
              _active={{ transform: "scale(1)" }}
              _hover={{ transform: "scale(1)", color: "white" }}
              aria-label={""}
            />
          </Link>
        </HStack>
        <Text color={"#C0C0C0"} p={"10px"} fontSize={"14px"}>
          © Copyright All rights reserved - Snudhana.com
        </Text>
      </Flex>
    </>
  );
}
