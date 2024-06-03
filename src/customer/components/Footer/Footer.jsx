import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <div>
            <Grid className="bg-black text-white texxt-center mt-10"
                container
                sx={{ bgcolor: "black", color: "white", py: 3 }}
            >
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant='h6'>Company</Typography>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>About</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Blog</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Jobs</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Press</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Patners</Button>

                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant='h6'>Solution's</Typography>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Marketing</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Analytics</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Commerce</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Insights</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Support</Button>

                    </div>


                </Grid>
                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant='h6'>Documentations</Typography>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Guide</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>API status</Button>

                    </div>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>

                    <Typography className="pb-5" variant='h6'>Legal</Typography>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Claim</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Privacy</Button>

                    </div>
                    <div>
                        <Button className="pb-5" variant='h6' gutterBottom>Terms</Button>

                    </div>
                </Grid>
                <Grid className='pt-20' item xs={12}>
                   <Typography variant="body2" component="p" align='center'>
                    &copy; 2024 ShoeCart. All rights reserved.
                   </Typography>
                   <Typography variant="body2" component="p" align='center'>
                   Made with love by ap29
                   </Typography>
                   <Typography variant="body2" component="p" align='center'>
                 <a href="https://www.linkedin.com/in/adityapippal/" target='blanck'>follow</a>
                   </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
