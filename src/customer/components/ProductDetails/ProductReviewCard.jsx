import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

function ProductReviewCard() {
  return (
    <div className='text-start'>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"green"}}>N</Avatar>
            </Box>
        </Grid>
        <Grid item xs={9}>
            <div className='space-y-2'>
               <div  >
                <p className='font-semibold'>Nans</p>
                <p className='text-zinc-500 opacity-70'>April 5, 2024</p>
               </div>
            </div>

            <Rating value={4.5} precision={.5} name="half-rating" readOnly/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, doloremque.</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReviewCard
