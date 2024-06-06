import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
function OrderDetails() {
    return (
        <div className="px-5 lg:px-20 text-start">
            <div>
                <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
                <AddressCard />
            </div>
            <div className="py-20">
                <OrderTracker />
            </div>
            <Grid className="space-y-6" container>
            {[1, 1, 1].map((item) =>  <Grid item container className="shadow-xl rounded-md p-5 border" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className="flex text-start space-x-5 ">
                            <img
                                className=' w-24 h-28 object-cover object-top'
                                src="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='space-y-1 ml-5'>
                                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur.</p>
                                <p className='space-x-2 opacity-65 text-sm'> <span>Color : White</span> <span>Size : L</span> </p>
                                <p className='opacity-75'>Seller: Lorem</p>
                                <p className='text-green-600 font-medium'>2999rs</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item >
                        <Box sx={{ color: deepPurple[500] }}>
                            <StarOutlineIcon sx={{ fontSize: "2rem" }} className="px-2" />
                            <span>Rate & Review Product</span>

                        </Box>
                    </Grid>
                </Grid>)}
            </Grid>
        </div>
    )
}

export default OrderDetails
