import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { Fab, Zoom, useScrollTrigger } from '@mui/material'
import React from 'react'

const ScrollToTop = () => {
    return (
        <div>
            <Zoom in={useScrollTrigger({ threshold: 300 })}>
                <Fab onClick={() => {
                    window.scrollTo(0, 0);
                }} size='small' sx={{ position: "fixed", bottom: 33, right: 33 }} color='primary' aria-label='add'>
                    <KeyboardArrowUp />
                </Fab>
            </Zoom>

        </div>
    )
}

export default ScrollToTop