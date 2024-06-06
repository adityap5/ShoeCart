import React from 'react'
import CartItems from './CartItems'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const navigate = useNavigate()
    const handleCheckout =()=>{
        navigate("/checkout/?step=2")
    } 
    return (
        <div>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="col-span-2">
                    {[1, 1, 1, 1].map((item) => <CartItems />)}
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
                        <Button onClick={handleCheckout}
                            variant='contained'
                            className='w-full'
                            sx={{ px: '2rem', py: "1rem", bgColor: "green" }}>Check Out</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
