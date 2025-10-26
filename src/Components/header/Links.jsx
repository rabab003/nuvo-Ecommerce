import { ExpandMore } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";


import React from 'react'

const Links = ({title}) => {

    return (
        <Box

            className=""
            sx={{
                ":hover .show-when-hover": { display: "block", },
                ":hover":{cursor:"pointer"}
                , position: "relative", display: "flex", alignItems: "center"


            }}>
            <Typography variant="body1">
                {title}
            </Typography>

            <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

            <Box className=" show-when-hover" sx={{ position: "absolute",zIndex:20, top: "100%", minWidth: "170px", left: "50%", transform: "translateX(-50%)", display: "none" }}>
                <Paper sx={{ mt: 1,  }} className="show-when-hover">
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText sx={{
                                        ".MuiTypography-root": {
                                            fontSize: "15px", fontWeight: 300,

                                        },

                                    }} primary="Dashboard"
                                    />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText sx={{
                                        ".MuiTypography-root": {
                                            fontSize: "15px", fontWeight: 300,

                                        },

                                    }} primary="Products"
                                    />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText sx={{
                                        ".MuiTypography-root": {
                                            fontSize: "15px", fontWeight: 300,

                                        },

                                    }} primary="Orders"
                                    />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton sx={{display:"flex", p:0, px:1.5}}>
                                    <ListItemText sx={{
                                        ".MuiTypography-root": {
                                            fontSize: "15px", fontWeight: 300,

                                        },

                                    }} primary="Profile"
                                    />
                                </ListItemButton>
                            </ListItem>

                        </List>
                    </nav>
                </Paper>
            </Box>
        </Box>
    )
}

export default Links