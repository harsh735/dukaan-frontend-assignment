import React from "react";
import {Grid, Form, Segment, Button, Header, Icon, Container, Image, Input, Item} from 'semantic-ui-react';
import { results } from "../data";
import Top from "./Top";
import Features from "./Features";
import Products from "./Products";
import Footer from "./Footer";

export default function Main() {
    return (
      <div>
        <Top />
        <Features />
        <Products />
        <Footer />
      </div>
    );
}