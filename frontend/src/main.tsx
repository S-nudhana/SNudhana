import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Homepage from "./pages/Homepage";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";

const theme = extendTheme({
  fonts: {
    heading: 'DM Sans, sans-serif',
    body: 'DM Sans, sans-serif',
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/skills",
    element: <Skills/>,
  },
  {
    path: "/project",
    element: <Project/>,
  },
  {
    path: "/photography",
    element: <Photography/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
       <RouterProvider router={router}></RouterProvider>
     </ChakraProvider>
   </React.StrictMode>
);

// import * as React from "react";
// import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./index.css";

// import homepage from "./pages/homepage";

// const theme = extendTheme({
//   fonts: {
//     heading: `'Noto Sans Thai', sans-serif`,
//     body: `'Noto Sans Thai', sans-serif`,
//   },
// });

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <homepage/>,
//   }
// ]);

// const rootElement = document.getElementById("root");
// ReactDOM.createRoot(rootElement).render(
//   <React.StrictMode>
//     <ChakraProvider theme={theme}>
//       <RouterProvider router={router}></RouterProvider>
//     </ChakraProvider>
//   </React.StrictMode>
// );
