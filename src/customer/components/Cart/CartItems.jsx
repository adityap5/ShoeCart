import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { ImportContacts } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';

function CartItems() {
    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-20 h-20 lg:w-36 lg:h-36">
                    <img
                        className='w-full h-full object-cover object-top'
                        src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                </div>
                <div className="ml-5 space-y-1 text-start">
                    <p className='font-semibold'>Lorem ipsum dolor sit amet.</p>
                    <p className='opacity-70'>Size: M,Black</p>
                    <p className='opacity-70 mt-2'>Seller: ipsum dolor sit amet.</p>
                    <div className='flex space-x-5 items-center  text-gray-900 mt-6'>
                        <p className=" tracking-tight text-gray-900">199</p>
                        <p className=" tracking-tight text-gray-900 line-through opacity-50">399</p>
                        <p className=" tracking-tight text-green-600">30% off</p>


                    </div>
                </div>
            </div>
                <div className='lg:flex items-center lg:space-x-10 pt-4'>
                    <div className='flex items-center space-x-2'>
                        <IconButton>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <span className='py-1 px-7 border rounded-sm'>
                            5
                        </span>
                            <IconButton sx={{color:'RGB(145 85 253)'}}>
                                <AddCircleOutlineIcon />
                            </IconButton>
                    </div>
<div>
    <Button sx={{color:'RGB(145 90 253)'}}>
        Remove
    </Button>
</div>
                </div>

        </div>
    )
}

export default CartItems
