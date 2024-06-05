import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'

function OrderDetails() {
    return (
        <div className="px-5 lg:px-20">
            <div>
                <h1 className="font-semibold text-xl py-7">Delivery Address</h1>
                <AddressCard />
            </div>
            <div className="py-20">
                <OrderTracker />
            </div>
            <Grid className="space-x-5" container>
                <Grid item container className="shadow-xl rounded-md p-5 border" sx={{ alignItems: "center", justifyContent: "space-between" }}>
                    <Grid item xs={6}>
                        <div className="flex text-start">
                            <img
                                className=' w-24 h-28 object-cover object-top'
                                src="https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className='space-y-2 ml-5'>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p className='space-x-5'> <span>Color : White</span> <span>Size : L</span> </p>
                <p>Seller: Lorem</p>
                <p className='text-green-600'>2999rs</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderDetails
