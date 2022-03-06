import React from 'react';
import styled from "styled-components"

const Section = () => {
    return (
        <Wrap>
            <ItemText>
                <h1>Model 3</h1>
                <p>Order Online for <span>Touchless Delivery</span></p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        CUSTOM ORDER
                    </LeftButton>
                    <RightButton>
                        EXISTING INVENTORY
                    </RightButton>
                </ButtonGroup>
                <DownArrow src="assets/images/down-arrow.svg" />
            </Buttons>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 32px;
`

const LeftButton = styled.div`
    background-color: #171A20CC;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin-right: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: #f4f4f4a6;
    color: #393c41;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    overflow-x: hidden;
`

const Buttons = styled.div`
    
`