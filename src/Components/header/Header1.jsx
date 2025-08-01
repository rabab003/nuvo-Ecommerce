import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import { Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 0.5,
        px: 2,
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {/* Hot tag with shipping info */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            sx={{
              px: 1.5,
              py: 0.5,
              bgcolor: "#d23f57",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                lineHeight: 1,
                fontSize: "0.7rem",
              }}
            >
              HOT
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 300,
              color: "#fff",
            }}
          >
            Free Express Shipping
          </Typography>
        </Stack>

        {/* Right side - theme toggle and social icons */}
        <Stack direction="row" alignItems="center">
          {/* Theme toggle */}
          <IconButton
            onClick={colorMode.toggleColorMode}
            color="inherit"
            size="small"
            sx={{
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            {theme.palette.mode === "light" ? (
              <DarkModeOutlined fontSize="small" />
            ) : (
              <LightModeOutlined fontSize="small" />
            )}
          </IconButton>

          {/* Social icons */}
          <IconButton
            color="inherit"
            size="small"
            sx={{
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            sx={{
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <Instagram fontSize="small" />
          </IconButton>
          <IconButton
            color="inherit"
            size="small"
            sx={{
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <Twitter fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
