import { Box, Flex, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/image/bgImage.jpg";

interface cardItems {
  item: string;
  tag: string;
}

interface categories {
  item: string;
}

const cardItems = [
  { item: "Java", tag: "Programming Languages" },
  { item: "TypeScript", tag: "Programming Languages" },
  { item: "JavaScript", tag: "Programming Languages" },
  { item: "SQL", tag: "Programming Languages" },
  { item: "Python", tag: "Programming Languages" },
  { item: "React JS/TS", tag: "Frontend Development" },
  { item: "Next JS", tag: "Frontend Development" },
  { item: "Vite", tag: "Frontend Development" },
  { item: "Tailwind CSS", tag: "Frontend Development" },
  { item: "MUI", tag: "Frontend Development" },
  { item: "Chakra UI", tag: "Frontend Development" },
  { item: "Bootstrap", tag: "Frontend Development" },
  { item: "HTML/CSS", tag: "Frontend Development" },
  { item: "Node.js", tag: "Backend Development" },
  { item: "Express JS", tag: "Backend Development" },
  { item: "IBM Db2", tag: "Database" },
  { item: "InfluxDB", tag: "Database" },
  { item: "MySQL", tag: "Database" },
  { item: "MariaDB", tag: "Database" },
  { item: "MongoDB", tag: "Database" },
  { item: "Prisma", tag: "Backend Development" },
  { item: "iterm2", tag: "Tools" },
  { item: "Visual Studio code", tag: "Tools" },
  { item: "Visual Studio", tag: "Tools" },
  { item: "IntelliJ IDEA", tag: "Tools" },
  { item: "Apache NetBeans", tag: "Tools" },
  { item: "DataGrip", tag: "Tools" },
  { item: "MySQL Workbench", tag: "Tools" },
  { item: "Postman", tag: "Tools" },
  { item: "Figma", tag: "Tools" },
  { item: "Docker", tag: "Others" },
  { item: "Grafana", tag: "Others" },
  { item: "Firebase", tag: "Others" },
  { item: "Bun", tag: "Backend Development" },
  { item: "Virtual Machine (Ubantu)", tag: "Others" },
];

const categories = [
  "Programming Languages",
  "Frontend Development",
  "Backend Development",
  "Database",
  "Others",
  "Tools",
];

const filterItems = (tag: string) =>
  cardItems.filter((item) => item.tag === tag);

export default function Skills() {
  return (
    <>
      <Box
        width="100%"
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
          textDecor="underline"
          textUnderlineOffset="2px"
        >
          skills
        </Text>
        <Flex
          pt="30px"
          width="100%"
          justify="center"
          flexDir={{ base: "column", md: "row" }}
          flexWrap="wrap"
          gap="40px"
        >
          {categories.map((category) => (
            <Box
              key={category}
              height="auto"
              maxW={'370px'}
              width={{ base: "100%", md: "45%", lg: "30%" }}
              boxShadow="lg"
              p="10"
              borderRadius="20px"
              bg="white"
              transition={"all 0.3s"}
              _hover={{
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.01)",
              }}
            >
              <Text fontSize="22px" fontWeight="600">
                {category}
              </Text>
              <Box fontSize="18px">
                {filterItems(category).map((item) => (
                  <Text key={item.item} pt="7px">
                    - {item.item}
                  </Text>
                ))}
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
      <Footer />
    </>
  );
}
