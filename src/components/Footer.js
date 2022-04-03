import React from "react";
import { Grid, Container, Image } from 'semantic-ui-react';

export default function Footer() {
    return (
        <div className="footer">
            <Container >
                <Image id="footer-img" src='./white.svg'/>
            </Container>

            <Grid style={{marginLeft: '15.5%', marginTop: '2%'}}>
                <Grid.Row className="footer-text footer-first">
                    <Grid.Column width={2}>
                        <p>Contact</p>  
                    </Grid.Column>

                    <Grid.Column width={2}>          
                        <p>Tutorials</p>
                    </Grid.Column>


                    <Grid.Column width={2}>
                        <p>Privacy</p>
                    </Grid.Column>


                    <Grid.Column width={2}>          
                        <p>About</p>
                    </Grid.Column>

                    <Grid.Column width={2}>          
                        <p>Facebook</p>  
                    </Grid.Column>
                </Grid.Row>



                <Grid.Row className="footer-text footer-second">
                    <Grid.Column width={2}>
                    <p>FAQ's</p>  
                    </Grid.Column>

                    <Grid.Column width={2}>          
                    <p>Blog</p>
                    </Grid.Column>


                    <Grid.Column width={2}>
                    <p>Banned Items</p>
                    </Grid.Column>


                    <Grid.Column width={2}>          
                    <p>Jobs</p>
                    </Grid.Column>

                    <Grid.Column width={2}>          
                    <p>Twitter</p>  
                    </Grid.Column>
                </Grid.Row>


                <Grid.Row className="footer-text footer-second">
                    <Grid.Column style={{marginLeft: '50%'}}>
                        <p >Linkedin</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <hr id="footer-hr"></hr>

            <Container style={{marginTop: '1.5%'}}>
            <p><span className="footer-end">Dukaan 2020, All rights reserved.</span><span className="footer-flag">Made in <Image src="./flag.svg" avatar style={{borderRadius: '9px'}}></Image></span></p>
            </Container>
        </div>
    );
}