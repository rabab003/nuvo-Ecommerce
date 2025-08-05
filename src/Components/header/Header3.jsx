import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import DevicesIcon from "@mui/icons-material/Devices";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import React, { useState } from "react";
import { Close, ContentCut } from "@mui/icons-material";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            // @ts-ignore
            bgcolor: theme.palette.myColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <WindowIcon />
          <Typography sx={{ padding: "0", textTransform: "capitalize", mx: 1 }}>
            Categories
          </Typography>
          <Box sx={{ flexGrow: 1 }}></Box>

          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            list: {
              "aria-labelledby": "basic-button",
            },
          }}
          sx={{
            ".MuiBox-root ": {
              width: 220,
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ElectricBikeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DevicesIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      <IconButton onClick={toggleDrawer("top", true)}>
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor={"top"}
        open={state["top"]}
        sx={{
          ".MuiPaper-root.css-k1yagv-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
        onClose={toggleDrawer("top", false)}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            maxWidth: 444,
            mx: "auto",
            mt: 6,
            position: "relative",
            pt: 10,
          }}
          className="border"
        >
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0 }}
            onClick={toggleDrawer("top", false)}
          >
            <Close />
          </IconButton>

          {[
            { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Mega Menu", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: "Full screen menu",
              subLink: ["Link1", "Link2", "Link3"],
            },
            { mainLink: "pages", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "user account", subLink: ["Link1", "Link2"] },
            {
              mainLink: "vendor account",
              subLink: ["Link1"],
            },
          ].map((item) => {
            return (
              <Accordion key={item.mainLink}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography component="span">{item.mainLink}</Typography>
                </AccordionSummary>

                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </Drawer>
    </Container>
  );
}
