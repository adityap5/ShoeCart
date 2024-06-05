import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
function OrderCard() {
    return (
        <div className="text-start shadow-lg hover:shadow-2xl "> 
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img
                            className=' w-24 h-28 object-cover object-top'
                            src="https://images.unsplash.com/photo-1621784563286-84f7646ef221?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="ml-5">
                            <p className="mb-2 space-y-2">
                                Lorem ipsum dolor sit amet.</p>
                            <p className="opacity-60 text-xs font-semibold">Size:L</p>
                            <p className="opacity-60 text-xs font-semibold">Color:Black</p>
                        </div>
                    </div>

                </Grid>

                <Grid item xs={2}>
                    <p className="mt-7">1999</p>
                </Grid>

                <Grid item xs={4}>
                    {true && <div>

                    <p className="flex mt-5">
                        <AdjustIcon sx={{width:'15px',height:'15px'}} className="text-green-600 mr-1 text-sm"/>
                        <span>
                            Delivered on June 23
                        </span>
                    </p>
<p className="text-xs text-zinc-700 opacity-60">
    Your order has been delivered
</p>
                    </div>
                    }
                    {false && <p className="flex mt-7">
                        <span >
                            Expected Delivery on June 23
                        </span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard
