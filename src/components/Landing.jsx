import React from 'react';
import styled from "styled-components"
import Section from './Section';

const Landing = () => {
    return (
        <Container>
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg" 
                leftBtnTxt="CUSTOM ORDER"
                rightBtnTxt="EXISTING INVENTORY"
            />

            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg" 
                leftBtnTxt="CUSTOM ORDER"
                rightBtnTxt="EXISTING INVENTORY"
            />

            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg" 
                leftBtnTxt="CUSTOM ORDER"
                rightBtnTxt="EXISTING INVENTORY"
            />

            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg" 
                leftBtnTxt="CUSTOM ORDER"
                rightBtnTxt="EXISTING INVENTORY"
            />

            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg" 
                leftBtnTxt="ORDER NOW"
                rightBtnTxt="LEARN MORE"
            />

            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg="solar-roof.jpg" 
                leftBtnTxt="ORDER NOW"
                rightBtnTxt="LEARN MORE"
            />

            <Section
                title="Accessories"
                backgroundImg="accessories.jpg" 
                leftBtnTxt="SHOP NOW"
            />
        </Container>
    );
}

export default Landing;

const Container = styled.div`
    height: 100vh;
`