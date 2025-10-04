import { ExpandMore } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";


import React from 'react'

const Links = () => {

    return (
        <Box

        className="border"
            sx={{
                ":hover .show-when-hover": { display: "block", }
                , position: "relative", display: "flex", alignItems: "center"
            
            
            }}>
            <Typography variant="body1">
                Home
            </Typography>

            <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />

            <Box className="border show-when-hover" sx={{ position: "absolute", top: "100%", minWidth: "170px", left: "50%", transform: "translateX(-50%)", display: "none" }}>
                <Paper sx={{mt:11}} className="show-when-hover">
                    <nav aria-label="secondary mailbox folders">
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Trash" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="#simple-list">
                                    <ListItemText primary="Spam" />
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