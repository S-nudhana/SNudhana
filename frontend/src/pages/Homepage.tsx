import { Box, Flex, Image, Text, VStack, Button } from "@chakra-ui/react";
import {
  IoLogoGithub,
  IoIosMail,
  IoLogoInstagram,
  IoLogoFacebook,
  IoIosCall,
} from "react-icons/io";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import image from "../assets/image/myPhoto1.png";
import bgImage from "../assets/image/bgImage.jpg";

export default function Homepage() {
  return (
    <>
      <Box
        width="100%"
        height={'auto'}
        p="30px 7%"
        pb={'50px'}
        bgImage={bgImage}
        bgSize="cover"
        bgPosition="center"
        bgColor="rgba(255, 255, 255, 0.95)"
        bgBlendMode="overlay"
        mx="auto"
      >
        <Navbar />
        <Flex
          pt={"30px"}
          width={"100%"}
          gap={{ base: "30px", lg: "100px" }}
          justify={"center"}
          align={"center"}
          flexDir={{ base: "column", lg: "row" }}
        >
          <Image
            src={image}
            height={"auto"}
            width={"400px"}
            justifyContent={"center"}
          ></Image>
          <Flex
            flexDir={"column"}
            width={{ base: "100%", lg: "50%" }}
            gap={"20px"}
          >
            <VStack
              mt="20px"
              height={"auto"}
              boxShadow="lg"
              p="10"
              borderRadius={"20px"}
              bg="white"
            >
              <Text fontSize={"46px"} fontWeight={"600"}>
                Who Am I ??
              </Text>
              <Text fontSize={"20px"} fontWeight={'600'} color={"#404040"}>
                I'm Nudhana Sarutipaisan, a Computer Science student in the
                International Program at King Mongkut's University of Technology
                Thonburi, with a GPAX of 3.89. Born on December 7, 2004, I am
                both a programmer and a photographer. I blend technical
                expertise with artistic vision. Explore my portfolio to see my
                projects and photography.
              </Text>
            </VStack>
            <Box p={"20px"}>
              <Text
                fontSize={"24px"}
                fontWeight={"600"}
                textDecor={"underline"}
                textUnderlineOffset={"2px"}
              >
                Contact
              </Text>
              <Flex
                justify={"flex-start"}
                flexDir={"column"}
                alignItems={"flex-start"}
                width={"100px"}
              >
                <Button
                  leftIcon={<IoIosCall />}
                  variant={"link"}
                  color={"#404040"}
                  pt={"10px"}
                >
                  +66 92 541 4298
                </Button>
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
                <Link to="mailto:nu37317@gmail.com">
                  <Button
                    leftIcon={<IoIosMail />}
                    variant={"link"}
                    color={"#404040"}
                    pt={"10px"}
                  >
                    nu37317@gmail.com
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
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
