import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoInstagram, IoLogoFacebook } from "react-icons/io";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/image/bgImage.jpg";

export default function Contact() {
  return (
    <>
      <Box
        width="100%"
        minH="92vh"
        p="30px 7%"
        pb={"50px"}
        bgImage={bgImage}
        bgSize="cover"
        bgPosition="center"
        bgColor="rgba(255, 255, 255, 0.95)"
        bgBlendMode="overlay"
        mx="auto"
      >
        <Navbar />
        <Text
          fontSize={"32px"}
          fontWeight={"600"}
          pt={"40px"}
          pl={"2%"} 
          textDecor={"underline"}
          textUnderlineOffset={"2px"}
        >
          Contact Info
        </Text>
        <Flex width={"100%"} flexDir={"column"} mx={"2%"} bgColor={'rgba(255,255,255,0.6)'}>
          <Text pt={"20px"} fontWeight={"600"} color={"#848884"}>
            Phone
          </Text>
          <Text fontWeight={"500"}>+66 92541 4298</Text>
          <Text pt={"20px"} fontWeight={"600"} color={"#848884"}>
            Email Adress
          </Text>
          <Text fontWeight={"500"}>nu37317@gmail.com</Text>
          <Text pt={"20px"} fontWeight={"600"} color={"#848884"}>
            Social links
          </Text>
          <Link to="https://github.com/S-nudhana">
            <Button
              leftIcon={<IoLogoGithub />}
              variant={"link"}
              color={"#404040"}
              pt={"10px"}
            >
              S-nudhana
            </Button>
          </Link>
          <Link to="https://www.instagram.com/nnaeeeeeeeee/">
            <Button
              leftIcon={<IoLogoInstagram />}
              variant={"link"}
              color={"#404040"}
              pt={"10px"}
            >
              nnaeeeeeeeee
            </Button>
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100027228291495">
            <Button
              leftIcon={<IoLogoFacebook />}
              variant={"link"}
              color={"#404040"}
              pt={"10px"}
            >
              Nudhana Sarutipaisan
            </Button>
          </Link>
          <Text pt={"20px"} fontWeight={"600"} color={"#848884"}>
            More Info
          </Text>
          <Text fontWeight={"500"}>
            For more info/work, Please contact me at{" "}
            <Link to="mailto:nu37317@gmail.com">
              <Button variant={"link"} color={"#404040"}>
                nu37317@gmail.com
              </Button>
            </Link>
          </Text>
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
