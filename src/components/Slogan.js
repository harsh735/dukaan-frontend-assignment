import React from "react";
import { Grid, Segment, Button, Header, Icon, Input, Card, Container, Divider } from 'semantic-ui-react';
import { results } from "../data";
import {Pagination} from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-textPrimary": {
        color: "#146EB4"
      },
      "& .Mui-selected": {
        color: "#FFF",
        backgroundColor: "#146EB4"
      }
    }
  }));

export default function Slogan() {
    const classes = useStyles();

    const resultsList = results.map((res) => {
        return (
            <Grid.Column style={{padding: 25, width: "40%", margin: -7}}>
                <Card style={{
                    marginTop: -20, 
                    background: '#F2F2F2', 
                    borderRadius: '4px', 
                    paddingRight: 20, 
                    paddingBottom: 20, 
                    paddingTop: 10, 
                    boxShadow: "none", 
                    paddingLeft: 15, 
                    width: 350,
                    height: 60, 
                    textAlign: "left", 
                    verticalAlign: "center", 
                    fontFamily: 'Galano-Regular',
                    fontWeight: "400",
                    fontSize: '16px',
                    lineHeight: '22px',
                    color: '#1A181E'
                }} 
                content={res.content} key={res.content}/>
            </Grid.Column>
        ); 
    })

    return (
        <div>
        <Grid className="slogan">
            <Grid.Row>
            <Grid.Column>
                <Segment basic padded="very">
                    <Header id="header-slogan" as="h1" textAlign="center">
                    Free Slogan Generator
                    </Header>
                    <Header id="slogan-para" as="h5">
                    Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.
                    </Header>

                    <p id="slogan-text">Word for your slogan</p>

                    <div id="input-box">
                    <Input id="input-text" icon={<Icon name='close' />} placeholder='Search...'/>
                    </div>
                    
                    <Button id="slogan-btn"><span id="sloganSpan">Generate Slogan</span></Button>
                    
                    <hr id="divider"></hr>

                    <Container style={{marginBottom: 40}}>
                        <Header as="h5" style={{marginTop: 450, marginLeft: 130, marginBottom: 30, fontFamily: 'Galano-Regular', fontWeight: "400", color: "#1A181E", fontSize: '20px', lineHeight: '28px'}}>
                            <Header.Content><strong>We have generated 1,023 slogans for “cozy”</strong></Header.Content>
                            <Button style={{fontFamily: 'Galano-Regular', fontWeight: "400", fontSize: '14px', lineHeight: '20px', color: '#146EB4', marginLeft: 190, marginTop: -10}} basic color='blue'><strong>Download all</strong></Button>
                        </Header>
                        
                        <Grid columns={2} relaxed centered textAlign="center" verticalAlign="middle">
                            <Grid.Row style={{marginTop: 10, marginLeft: 20, paddingRight: 20}}>
                                {resultsList}
                            </Grid.Row>
                        </Grid>
                    </Container>
                    <Divider style={{margin: "auto 9em"}}></Divider>
                    <Pagination classes={{ ul: classes.ul }} style={{width: 400, marginLeft: 400, marginTop: 30}} count={21} siblingCount={0} color="primary" hidePrevButton hideNextButton/>
                    <Header style={{marginTop: -30}}>
                        <span style={{color: "#146EB4", fontWeight: 400, fontSize: "14px", marginLeft: 840}}>Next <Icon style={{color: "#146EB4"}} name="angle right"/></span>
                    </Header>
                </Segment>
            </Grid.Column>
            </Grid.Row>
        </Grid>
        </div>
    );
}