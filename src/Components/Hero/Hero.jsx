import { Box, Button, Container, Link, Stack, Typography, useTheme } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './styles.css';
import IconSection from './IconSection';


const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];

export default function Hero() {
    const theme = useTheme()
    return (
        <Container >

            <Box sx={{ mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>

     
            <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
                
                {mySlider.map((item)=>{
                    return(
                                     
                <SwiperSlide key={item.link} className="parent-slider">
                    <img src={item.link} />
                    <Box sx={{
                        [theme.breakpoints.up('sm')]: {
                            position: "absolute", left: "10%", textAlign: "left"
                        },

                        [theme.breakpoints.down('sm')]: {
                            pt: 4,
                            pb: 6
                        },
                    }}>
                        <Typography sx={{ color: "#222" }} variant="h5">
                            LIFESTYLE COLLECTION
                        </Typography>

                        <Typography sx={{ color: "#222", fontWeight: 400, my: 1 }} variant='h3'>
                            {item.text}
                        </Typography>

                        <Stack sx={{  justifyContent: { xs: "center", sm: "left" }, }} direction={"row"} alignItems={"center"}>

                            <Typography color={"#333"} mr={1} variant="h4">
                                SALE UP TO
                            </Typography>
                            <Typography color={"#D23F57"} variant="h4">
                                30% OFF
                            </Typography>
                        </Stack>

                            <Typography sx={{
                                color: "#000",
                                fontWeight: 300,
                                my: 1,
                            }}
                                variant="body1">
                                Get Free Shipping on orders over $99.00
                            </Typography>

                            <Button
                                sx={{
                                    px: 5,
                                    py: 1,
                                    mt: 2,
                                    backgroundColor: "#222",
                                    boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                    color: "#fff",
                                    borderRadius: "1px",
                                    "&:hover": {
                                        bgcolor: "#151515",
                                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                                    },
                                }}
                                variant="contained"
                            >
                                shop now
                            </Button>

                    </Box>
                </SwiperSlide>
  
                    )
                })}
                
                
 
            </Swiper>



            <Box sx={{ display: { xs: "none", md: "block", width: "25.5%", flexShrink: 0 } }}>
                <Box sx={{ position: "relative", mb: 2 }} >
                    <img width={"100%"} src="src/images/banner-17.jpg" alt="banner" />

                    <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 30 }}>
                        <Typography variant='caption' sx={{ color: "#2b3445", textTransform: "uppercase", fontSize: "15px" }}>
                            new arrivals
                        </Typography>

                        <Typography variant='h6' sx={{ fontWeight: "bold", color: "#2b3445", textTransform: "uppercase", fontSize: "18px", mt: 1 }}>
                            summer <br /> sale 20% off
                        </Typography>

                        <Link sx={{ color: "#2b3445", display: "flex", alignItems: "center", gap: "5px", transition: "0.2s", "&:hover": { color: "#d23f57" }, }} href="#" underline='none'>
                            Shop Now
                        </Link>
                    </Stack>
                </Box>

                <Box sx={{ position: "relative" }} >
                    <img width={"100%"} src="src/images/banner-16.jpg" alt="banner" />

                    <Stack sx={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 30 }}>
                        <Typography variant='caption' sx={{ color: "#2b3445", textTransform: "uppercase", fontSize: "18px" }}>
                            new arrivals
                        </Typography>

                        <Typography variant='h6' sx={{ color: "#2b3445", textTransform: "uppercase", fontSize: "16px", mt: 1 }}>
                            summer sale 20% off
                        </Typography>

                        <Link sx={{ color: "#2b3445", display: "flex", alignItems: "center", gap: "5px", transition: "0.2s", "&:hover": { color: "#d23f57" }, }} href="#" underline='none'>
                            Shop Now
                        </Link>
                    </Stack>
                </Box>
            </Box>

           
            </Box>
            <IconSection />
        </Container>
    )
}
