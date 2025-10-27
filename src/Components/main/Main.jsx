// import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material'
// import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'

// import React from 'react'

// const Main = () => {

//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   return (
//     <Container>
//       <Stack>
//         <Box>
//           <Typography variant="h6">Selected Products</Typography>
//           <Typography fontWeight={300} variant="body1">
//             All our new arrivals in a exclusive brand selection
//           </Typography>
//         </Box>

//         <ToggleButtonGroup
//           color="error"
//           // value={Date}
//           exclusive
//           // onChange={handleAlignment}
//           aria-label="text alignment"
//           sx={{
//             ".Mui-selected": {
//               border: "1px solid rgba(233, 69, 96, 0.5) !important",
//               color: "#e94560",
//               backgroundColor: "initial",
//             },
//           }}
//         >
//           <ToggleButton
//             sx={{ color: theme.palette.text.primary }}
//             className="myButton"
//             // value={allProductsAPI}
//             aria-label="left aligned"
//           >
//             All Products
//           </ToggleButton>

//           <ToggleButton
//             sx={{ mx: "16px !important", color: theme.palette.text.primary }}
//             className="myButton"
//             // value={menCategoryAPI}
//             aria-label="centered"
//           >
//             MEN category
//           </ToggleButton>

//           <ToggleButton
//             sx={{ color: theme.palette.text.primary }}
//             className="myButton"
//             // value={womenCategoryAPI}
//             aria-label="right aligned"
//           >
//             Women category
//           </ToggleButton>
//         </ToggleButtonGroup>


//       </Stack>

//       <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
//         {["aaa", "bbb", "ccc"].map((item) => {

//           return (

//             <Card  key={item}
//                 sx={{
//                   maxWidth: 333,
//                   mt: 6,
//                   ":hover .MuiCardMedia-root ": {
//                     rotate: "1deg",
//                     scale: "1.1",
//                     transition: "0.35s"
//                   },
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   alt="green iguana"
//                   height="140"
//                   image="/static/images/cards/contemplative-reptile.jpg"
//               />
//               <CardContent>
//                 <Stack
//                   direction={"row"}
//                   justifyContent={"space-between"}
//                   alignItems={"center"}
//                 >
//                   <Typography gutterBottom variant="h6" component="div">
//                     {/* {item.attributes.productTitle} */}
//                   </Typography>

//                   <Typography variant="subtitle1" component="p">
//                     {/* ${item.attributes.productPrice} */}
//                   </Typography>
//                 </Stack>

//                 <Typography variant="body2" color="text.secondary">
//                   Lizards are a widespread group of squamate reptiles, with
//                   over 6,000 species, ranging across all continents except
//                   Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions sx={{ justifyContent: "space-between" }}>
//                 <Button
//                   onClick={handleClickOpen}
//                   sx={{ textTransform: "capitalize" }}
//                   size="large"
//                 >
//                   <AddShoppingCartOutlinedIcon
//                     sx={{ mr: 1 }}
//                     fontSize="small"
//                   />
//                   add to cart
//                 </Button>
//                 <Rating
//                   precision={0.1}
//                   name="read-only"
//                   value={item.attributes.productRating}
//                   readOnly
//                 />
//               </CardActions>
//             </Card>
//           )
//         })}



//       </Stack>
//     </Container>
//   )
// }

// export default Main

import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Rating, Stack, ToggleButton, ToggleButtonGroup, Typography, useTheme } from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import React from 'react'

const Main = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // Mock data for products
  const mockProducts = [
    {
      id: 1,
      attributes: {
        productTitle: "Men's Casual Shirt",
        productPrice: "45.99",
        productRating: 4.5
      }
    },
    {
      id: 2,
      attributes: {
        productTitle: "Women's Summer Dress",
        productPrice: "59.99",
        productRating: 4.2
      }
    },
    {
      id: 3,
      attributes: {
        productTitle: "Unisex Sneakers",
        productPrice: "79.99",
        productRating: 4.8
      }
    }
  ];

  // Mock function for toggle button
  const handleAlignment = (event, newValue) => {
    console.log('Selected category:', newValue);
  };

  // Mock function for add to cart
  const handleClickOpen = () => {
    setOpen(true);
    console.log('Add to cart clicked');
    // You can remove this alert if you don't want popups
    alert('Item added to cart!');
  };

  return (
    <Container sx={{ py: 9 }}>
      <Stack  direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}>
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value="all" // Default value
          exclusive
          onChange={handleAlignment}
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
            value="all"
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="men"
            aria-label="centered"
          >
            MEN category
          </ToggleButton>

          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="women"
            aria-label="right aligned"
          >
            Women category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
        {mockProducts.map((item) => {
          return (
            <Card key={item.id}
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
                alt="product image"
                height="200"
                image="https://via.placeholder.com/333x200/4A5568/FFFFFF?text=Product+Image"
              />
              <CardContent>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {item.attributes.productTitle}
                  </Typography>

                  <Typography variant="subtitle1" component="p">
                    ${item.attributes.productPrice}
                  </Typography>
                </Stack>

                <Typography variant="body2" color="text.secondary">
                  Premium quality product with excellent craftsmanship. Perfect for everyday use with comfortable fit and stylish design.
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
                  value={item.attributes.productRating}
                  readOnly
                />
              </CardActions>
            </Card>
          )
        })}
      </Stack>
    </Container>
  )
}

export default Main