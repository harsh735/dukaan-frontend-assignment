import React from "react";
import { Grid, Header, Item } from 'semantic-ui-react';

export default function Products() {
    return (
      <div>
        <Header id="bottom-text" as="h1" textAlign="center">
          Try our other free products
        </Header>

        <Grid style={{marginLeft: '15.5%', marginTop: '2%'}}>
          <Grid.Row >
            <Grid.Column width={5}>
                <Item>
                  <Item.Image size='large' src='./bottom-1.svg' />
                  <Item.Content className="bottom-header">
                    <Item.Header className="bottom-item-header" as='h2'>Privacy Policy Generator</Item.Header>
                    <Item.Description>
                      Stock your store with 100s of products and<br /> 
                      start selling to customers in minutes, without <br /> 
                      the hassle of inventory or packaging.
                    </Item.Description>
                  </Item.Content>
                </Item>

              </Grid.Column>

              <Grid.Column width={5}>          
                <Item>
                  <Item.Image size='large' src='./bottom-2.svg' />
                  <Item.Content  className="bottom-header">
                    <Item.Header className="bottom-item-header"  as='h2'>Terms & Conditions Generator</Item.Header>
                    <Item.Description>
                      Stock your store with 100s of products and<br /> 
                      start selling to customers in minutes, without <br /> 
                      the hassle of inventory or packaging. 
                    </Item.Description>
                  </Item.Content>
                </Item>
              </Grid.Column>


              <Grid.Column width={5}>
                <Item>
                  <Item.Image size='large' src='./bottom-3.svg' />
                  <Item.Content  className="bottom-header">
                    <Item.Header className="bottom-item-header" as='h2'>Domain Name Generator</Item.Header>
                    <Item.Description>
                      Stock your store with 100s of products and<br /> 
                      start selling to customers in minutes, without <br /> 
                      the hassle of inventory or packaging.
                    </Item.Description>
                  </Item.Content>
                </Item>
            </Grid.Column>


            <Grid.Column width={5} style={{marginTop: '3%'}}>          
                <Item>
                  <Item.Image size='large' src='./bottom-4.svg' />
                  <Item.Content className="bottom-header">
                    <Item.Header className="bottom-item-header"  as='h2'>Invoice Generator</Item.Header>
                    <Item.Description >
                      Stock your store with 100s of products and<br /> 
                      start selling to customers in minutes, without<br /> 
                      the hassle of inventory or packaging.
                    </Item.Description>
                  </Item.Content>
                </Item>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
}