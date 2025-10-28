import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Dialog, IconButton, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'

import React from 'react'
import { Close } from '@mui/icons-material';

const Main = () => {

  // const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Container>
      <Stack>
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          // value={Date}
          exclusive
          // onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            // @ts-ignore
            value={allProductsAPI}
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            // @ts-ignore
            value={menCategoryAPI}
            aria-label="centered"
          >
            MEN category
          </ToggleButton>

          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            // @ts-ignore
            value={womenCategoryAPI}
            aria-label="right aligned"
          >
            Women category
          </ToggleButton>
        </ToggleButtonGroup>


      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
        {["aaa", "bbb", "ccc"].map((item) => {

          return (

            <Card key={item}
              sx={{
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root ": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: "0.35s"
                },
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {/* {item.attributes.productTitle} */}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    {/* ${item.attributes.productPrice} */}
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with
                  over 6,000 species, ranging across all continents except
                  Antarctica
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={handleClickOpen}
                  sx={{ textTransform: "capitalize" }}
                  size="large"
                >
                  <AddShoppingCartOutlinedIcon
                    sx={{ mr: 1 }}
                    fontSize="small"
                  />
                  add to cart
                </Button>
                <Rating
                  precision={0.1}
                  name="read-only"
                  // value={item.attributes.productRating}
                  readOnly
                />
              </CardActions>
            </Card>
          )
        })}

        <Dialog
          sx={{ ".Muipaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          // fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </Dialog>




      </Stack>
    </Container>
  )
}

export default Main