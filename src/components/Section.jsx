import React from 'react';
import styled from "styled-components"

const Section = () => {
    return (
        <Wrap>
            <ItemText>
                <h1>Model 3</h1>
                <p>Order Online for <span>Touchless Delivery</span></p>
            </ItemText>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('assets/images/model-3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`