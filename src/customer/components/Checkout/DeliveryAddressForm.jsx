import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

function DeliveryAddressForm() {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const address = {
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            streetAddress: data.get('address'),
            city: data.get('city'),
            state: data.get('state'),
            zipCode: data.get('zip'),
            mobile: data.get('phoneNumber')
        }
        console.log("address",address);
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll">
                    <div className="p-5 py-7 border-b cursor-pointer text-start">
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 90 253" }} size="large" variant="contained">Delivere here</Button>
                    </div>
                </Grid>
                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        required
                                        id='firstName'
                                        name='firstName'
                                        label="First Name"
                                        fullWidth
                                        autoComplete='given-name' />

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        required
                                        id='lastName'
                                        name='lastName'
                                        label="Last Name"
                                        fullWidth
                                        autoComplete='given-name' />

                                </Grid>
                                <Grid item  xs={12}>
                                    <TextField
                                        required
                                        id='address'
                                        name='address'
                                        label="Address"
                                        fullWidth
                                        multiline
                                        rows={3}
                                        autoComplete='given-name' />

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        required
                                        id='city'
                                        name='city'
                                        label="City"
                                        fullWidth
                                        autoComplete='given-name' />

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        required
                                        id='state'
                                        name='state'
                                        label="State"
                                        fullWidth
                                        autoComplete='given-name' />

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        required
                                        id='zip'
                                        name='zip'
                                        label="Zip/Postal code"
                                        fullWidth
                                        autoComplete='shipping postal-code' />

                                </Grid>
                                <Grid item xs={12} lg={6}>
                                    <TextField
                                        required
                                        id='phoneNumber'
                                        name='phoneNumber'
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete='given-name' />

                                </Grid>
                                
                                <Grid item xs={12} lg={6} className='flex items-center'>
                                <Button sx={{ bgcolor: "RGB(145 90 253" }} size="large" variant="contained"
                                type='submit'>Delivere here</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm
