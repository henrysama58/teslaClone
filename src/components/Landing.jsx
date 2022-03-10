import React from 'react';
import styled from "styled-components"
import Section from './Section';
import models from '../assets/model-s.jpg'
import model3 from '../assets/model-3.jpg'
import modelx from '../assets/model-x.jpg'
import modely from '../assets/model-y.jpg'
import solarPanel from '../assets/solar-panel.jpg'
import solarRoof from '../assets/solar-roof.jpg'
import accessories from '../assets/accessories.jpg'

const Landing = () => {
    return (
        <Container>
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={model3}
                leftBtnTxt="CUSTOM ORDER"
                rightBtnTxt="EXISTING INVENTORY"
            />

            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={modely} 
                leftBtnTxt="CUSTOM ORDER"
                rightBtnTxt="EXISTING INVENTORY"
            />

            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={models}
                leftBtnTxt="CUSTOM ORDER"
                rightBtnTxt="EXISTING INVENTORY"
            />

            <Section
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg={modelx} 
                leftBtnTxt="CUSTOM ORDER"
                rightBtnTxt="EXISTING INVENTORY"
            />

            <Section
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg={solarPanel} 
                leftBtnTxt="ORDER NOW"
                rightBtnTxt="LEARN MORE"
            />

            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg={solarRoof}
                leftBtnTxt="ORDER NOW"
                rightBtnTxt="LEARN MORE"
            />

            <Section
                title="Accessories"
                backgroundImg={accessories} 
                leftBtnTxt="SHOP NOW"
            />
        </Container>
    );
}

export default Landing;

const Container = styled.div`
    height: 100vh;
`