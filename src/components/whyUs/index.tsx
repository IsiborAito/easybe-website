import React from "react";
import { Grid, Typography, Stack, Divider, Container} from "@mui/material";

const WhyUs = () => {
    return(
        <Container sx={{paddingTop: '2rem'}}>
            <Grid container justifyContent="center" alignItems="flex-start" spacing={4}>
                <Grid item md={6}>
                    <Stack>
                        <Typography variant="body1">WHY EASYBE?</Typography>
                        <Typography variant="h3">Any Software Needed.</Typography>
                        <Typography variant="subtitle1">We are able to design, construct, deploy, manage and maintain custom software solution that allow businesses to acheive their objectives.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={6}>
                    <img src="https://res.cloudinary.com/purenelle/image/upload/v1681669545/Easybe/code_qimkv8.jpg" alt="code" width="100%" style={{borderRadius: '8px'}}/>
                </Grid>
                <Grid item md={12}><Divider variant="fullWidth" /></Grid>
                <Grid item md={5}>
                    <Stack>
                        <Typography variant="subtitle2">
                            OUR STORY
                        </Typography>
                        <Typography variant="h3" sx={{fontWeight: '700'}}>
                            We provide custom software development, constructed to aid your businesses
                        </Typography>
                    </Stack>
                </Grid> 
                <Grid item md={2}>
                    <Divider flexItem orientation="vertical" sx={{height: "400px"}}/>
                </Grid>
                <Grid item md={5}>
                    <Typography variant="h5">
                        Easybe is a software development company started from a love for building software to solve problems. 
                    </Typography>
                </Grid>
                <Grid item md={12}>
                    <Divider variant="fullWidth" />
                </Grid>
            </Grid>
        </Container>
        
    );
}

export default WhyUs;