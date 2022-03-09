import React from 'react';
import styled from "styled-components"
import Fade from 'react-reveal/Fade'

const Section = ({ title, description, leftBtnTxt, rightBtnTxt, backgroundImg }) => {
    return (
        <Wrap backgroundImg={backgroundImg}>
            <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <Fade bottom>
                    <p>{description}</p>
                </Fade>
            </ItemText>
            </Fade>
            <Buttons>
                <ButtonGroup>
                    <Fade left>
                        <LeftButton>
                            {leftBtnTxt}
                        </LeftButton>
                    </Fade>
                    {
                        rightBtnTxt && 
                        <Fade right>
                            <RightButton>
                                {rightBtnTxt}
                            </RightButton>
                        </Fade>
                    }
                </ButtonGroup>
                <Fade top>
                    <DownArrow src="/assets/images/down-arrow.svg" />
                </Fade>
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/assets/images/${props.backgroundImg}")` };
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

    h1 {
        font-size: 40px;
        margin-bottom: 8px;
    }
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
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
    opacity: 0.95;
    cursor: pointer;
    margin: 8px;
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