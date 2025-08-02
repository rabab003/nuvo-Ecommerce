import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const options = ["EN", "AR"];

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 1,
        px: 2,
        color: "white",
        borderBottomRightRadius: "5px",
        borderBottomLeftRadius: "5px",
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
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
            {/* language menu */}

            <Stack>
              <List
                sx={{ cursor: "pointer", p: 0, m: 0 }}
                component="nav"
                aria-label="Device settings"
              >
                <ListItemButton
                  id="lock-button"
                  aria-haspopup="listbox"
                  aria-controls="lock-menu"
                  aria-label="when device is locked"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClickListItem}
                  color="white"
                >
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "12px",
                        color: "white",
                        padding: "1px",
                      },
                    }}
                    secondary={options[selectedIndex]}
                  />
                  <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                </ListItemButton>
              </List>
              <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "lock-button",
                    role: "listbox",
                  },
                }}
              >
                {options.map((option, index) => (
                  <MenuItem
                    sx={{
                      fontSize: "11px",
                    }}
                    key={option}
                    selected={index === selectedIndex}
                    onClick={(event) => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Stack>

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
      </Container>
    </Box>
  );
}
