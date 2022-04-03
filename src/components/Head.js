import React from "react";
import { Container, Image, Button } from "semantic-ui-react";

export default function Head() {
    return (
        <Container>
            <Image id="header-img" src='./white.png'/>
            <p id="signIn-btn">Sign In</p>
            <Button id="top-btn"><span id="topSpan">Dukaan For PC</span></Button>
        </Container>
    );
}