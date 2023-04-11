import React from 'react';
import {Container, Grid, Button,  Stack, Typography} from "@mui/material";

const firstSectionLinks = [
    {
        text: 'Software development'
    },
    {
        text: 'Mobile app development'
    },
    {
        text: 'Web app development'
    }
];

const secondSectionLinks = [
    {
        text: 'Services'
    },
    {
        text: 'Capabilities'
    },
    {
        text: 'About us'
    }
]

const Footer = () => {
    return(
        <Container>
            <Grid container justifyContent={"space-between"}>
                <Grid item>
                    <Stack spacing={2}>
                        <img/>
                        <Typography variant="subtitle2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem.
                        </Typography>
                        <Button variant="contained" size="large" color="primary">
                            Get Started
                        </Button>
                    </Stack>
                </Grid>
                <Grid item container justifyContent={"space-between"}>
                    <Stack spacing={2}>
                        {firstSectionLinks.map((link) => (
                            <Typography variant="subtitle2">
                                {link.text}
                            </Typography>
                        ))}
                    </Stack>
                    <Stack spacing={2}>
                        {secondSectionLinks.map((link) => (
                            <Typography>
                                {link.text}
                            </Typography>
                        ))}
                    </Stack>
                    <Stack spacing={2}></Stack>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;