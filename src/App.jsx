import Header1 from "./Components/header/Header1";
import Header2 from "./Components/header/Header2";
import Header3 from "./Components/header/Header3";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./Components/Hero/Hero";
import { Box } from '@mui/material';
import Main from "./Components/main/Main"
import Footer from "./Components/footer/Footer";
import ScrollToTop from "./Components/scroll/ScrollToTop";

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

          <Box bgcolor={theme.palette.bg.main}>
            <Hero />
          <Main/>

          </Box>
          <Footer/>
          <ScrollToTop/>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


// 3:00:00
// 3:48:00
// 4:37:00
