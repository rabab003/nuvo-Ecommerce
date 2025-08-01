// import React from "react";
// import { createContext, useState, useMemo } from "react";
// import { createTheme } from "@mui/material/styles";
// import { grey } from "@mui/material/colors";

// export const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//           text: {
//             primary: "#2B3445",
//           },
//           neutral: {
//             main: "#64748B",
//           },

//           favColor: {
//             main: grey[300],
//           },
//         }
//       : {
//           // palette values for dark mode
//           neutral: {
//             main: "#64748B",
//           },

//           favColor: {
//             main: grey[800],
//           },
//           text: {
//             primary: "#fff",
//           },
//         }),
//   },
// });

// // context for color mode
// export const ColorModeContext = createContext({
//   toggleColorMode: () => {},
// });

// export const useMode = () => {
//   const [mode, setMode] = useState(
//     localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
//   );

//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () =>
//         setMode((prev) => (prev === "light" ? "dark" : "light")),
//     }),
//     []
//   );

//   const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
//   return [theme, colorMode];
// };

import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          // palette values for dark mode
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    // Load saved mode from localStorage on initial render
    const savedMode = localStorage.getItem("mode");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const newMode = prev === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode); // Save to localStorage
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
