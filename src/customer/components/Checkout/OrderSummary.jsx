import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button, IconButton } from '@mui/material';
import CartItems from '../Cart/CartItems';


function OrderSummary() {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard/>
      </div>
      <div className="lg:grid grid-cols-3 relative">
                <div className="col-span-2">
                    {[1, 1,].map((item) => <CartItems />)}
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
                    <div className="border">
                        <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                        <hr />
                        <div className="space-y-3 font-semibold mb-4 ">
                            <div className="flex justify-between pt-3 text-black">
                                <span>Price</span>
                                <span>Rs499 </span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Discount</span>
                                <span className="text-green-600">Rs499 </span>
                            </div>
                            <div className="flex justify-between pt-3 text-black">
                                <span>Delivery Charge</span>
                                <span className="text-green-600">Free </span>
                            </div>
                            <hr />
                            <div className="flex items-center justify-between pt-3 text-black font-bold">
                                <span>Total Charge</span>
                                <span className="text-green-600">Rs499 </span>
                            </div>

                        </div>
                        <Button
                            variant='contained'
                            className='w-full'
                            sx={{ px: '2rem', py: "1rem", bgColor: "green" }}>Check Out</Button>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default OrderSummary
