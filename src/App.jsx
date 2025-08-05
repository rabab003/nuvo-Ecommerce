// import Header1 from "./Components/header/Header1";
// import Header2 from "./Components/header/Header2";
// import Header3 from "./Components/header/Header3";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./theme";

// function App() {
//   const [theme, colorMode] = useMode();

//   return (
//     <div className="m-0">
//       <ColorModeContext.Provider
//         // @ts-ignore
//         value={colorMode}
//       >
//         <ThemeProvider
//           // @ts-ignore
//           theme={theme}
//         >
//           <Header1 />
//           <Header2 />
//           <Header3 />
//         </ThemeProvider>
//       </ColorModeContext.Provider>
//     </div>
//   );
// }

// export default App;

// // 29:00

import Header1 from "./Components/header/Header1";
import Header2 from "./Components/header/Header2";
import Header3 from "./Components/header/Header3";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />{" "}
        {/* This helps with baseline styles and dark mode background */}
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Header1 />
          <Header2 />
          <Header3 />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

// 1:05:50
// 1:27:40
// 1:54:10
