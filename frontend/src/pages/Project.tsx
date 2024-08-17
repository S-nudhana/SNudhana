import { Box, Stack, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgImage from "../assets/image/bgImage.jpg";

interface projectItems {
  name: string;
  link: string;
  linkType: string;
  description: string;
  frontend: string;
  backend: string | null;
}

const projectItems = [
  {
    name: "Pm 2.5 display for SIT KMUTT",
    link: "https://pm25project.sit.kmutt.ac.th/",
    linkType: 'Visit website',
    description: "This project is a web application that displays PM 2.5 data from the sensor in SIT KMUTT.",
    frontend: "React JS + tailwind CSS + MUI",
    backend: "Node.JS + ExpressJS + InfluxDB",
  },
  {
    name: 'Certificate for SIT KMUTT',
    link: "",
    linkType: 'In progress',
    description: "This project is a web application that allows students to request a certificate from SIT KMUTT and manage the event by SIT admin and professor.",
    frontend: "React JS + Chakra UI",
    backend: "Node.JS + ExpressJS + MySQL",
  },
  {
    name: 'Odyssey-Traveling',
    link: "https://github.com/S-nudhana/Odyssey-Traveling",
    linkType: 'Github link',
    description: "This project is a web application that allows users to discover new places in Thailand by have algorithm to add favorite place, personal preference, suggestion the place by calculate latitude-longtitude.",
    frontend: "React JS + MUI",
    backend: "Node.JS + ExpressJS + MySQL",
  },
  {
    name: 'Snudhana Portfolio Website',
    link: "",
    linkType: 'Github link',
    description: "This project is a web application that displays my portfolio website.",
    frontend: "React TS + Chakra UI",
    backend: null,
  }
];

export default function Project() {
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
          px={"2%"}
          textDecor="underline"
          textUnderlineOffset="2px"
        >
          Project
        </Text>
        <Stack mx={"2%"} pt={"20px"} bgColor={'rgba(255,255,255,0.6)'}>
          {projectItems.map((project, index) => (
            <Stack key={project.name} height="auto" width="100%" pt={'10px'}>
              <Text fontSize="22px" fontWeight="600">
                {index + 1}. {project.name}:{" "}
                <Link to={project.link}>
                  <Button variant={"link"} color={"#404040"}>
                    {project.linkType}
                  </Button>
                </Link>
              </Text>
              <Text>Description: {project.description}</Text>
              <Text pl={"10px"}>- Frontend: {project.frontend}</Text>
              <Text pl={"10px"} display={project.backend === null ? 'none' : 'block'}>- Backend: {project.backend}</Text>
            </Stack>
          ))}
        </Stack>
      </Box>
      <Footer />
    </>
  );
}
