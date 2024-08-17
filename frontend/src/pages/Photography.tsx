import { Box, Text, Image, Flex } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/image/bgImage.jpg";
import IMG_4454 from "../assets/image/IMG_4454.png";
import IMG_4114 from "../assets/image/IMG_4114.png";
import IMG_2280 from "../assets/image/IMG_2280_Original (1).png";
import IMG_4271 from "../assets/image/IMG_4271_jpg.png";
import DSC_9248 from "../assets/image/DSC_9248.png";
import APC_0088 from "../assets/image/APC_0088.png";
import APC_0106 from "../assets/image/APC_0106.png";
import APC_0034 from "../assets/image/APC_0034.png";
import APC_0101 from "../assets/image/APC_0101.png";
import dclassic1 from "../assets/image/dclassic 2566-07-25 71546.524 PM.png";
import dclassic2 from "../assets/image/dclassic 2566-07-29 53446.886 PM.png";
import dclassic3 from "../assets/image/dclassic 2566-07-29 53502.333 PM.png";
import dclassic4 from "../assets/image/dclassic 2566-07-29 53516.208 PM.png";

interface imageItems {
  image: string;
}

const imageItems = [IMG_4454, IMG_4271, IMG_2280, APC_0106, APC_0088, DSC_9248, APC_0034, IMG_4114, APC_0101, dclassic1, dclassic2, dclassic3, dclassic4];

export default function Photography() {
  return (
    <>
      <Box
        width="100%"
        minH="92vh"
        p="30px 7%"
        pb="50px"
        bgImage={bgImage}
        bgSize="cover"
        bgPosition="center"
        bgColor="rgba(255, 255, 255, 0.95)"
        bgBlendMode="overlay"
        mx="auto"
      >
        <Navbar />
        <Text
          fontSize="32px"
          fontWeight="600"
          pt="40px"
          pl={"2%"}
          textDecor={"underline"}
          textUnderlineOffset={"2px"}
        >
          Photography
        </Text>
        <Flex
          flexWrap={"wrap"}
          flexDir={{ base: "column", md: "row" }}
          align={"center"}
          justify={{ base: "center", md: "space-between" }}
          pt={"30px"}
          px={"2%"}
        >
          {imageItems.map((image) => (
            <Image
              src={image}
              width={{ base: "80%", md: "45%", lg: "22%" }}
              height={"auto"}
              mb={"40px"}
              transition={"all 0.3s"}
              cursor={'pointer'}
              _hover={{
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.03)",
              }}
            />
          ))}
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
