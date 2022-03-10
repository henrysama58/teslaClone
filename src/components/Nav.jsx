import React, { useState } from 'react';
import styled from 'styled-components';
import teslaLogo from '../assets/logo.svg'
import CloseIcon from '@mui/icons-material/Close';

const Nav = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container> 
                <figure>
                    <img src={teslaLogo} alt="" />
                </figure>
            <CarLinks>
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
                <a href="#">Solar Roof</a>
                <a href="#">Solar Panels</a>
            </CarLinks>
            <MenuLinks>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a onClick={() => setBurgerStatus(true)} href="#">Menu</a>
            </MenuLinks>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CloseButton onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper> 
                <ul>
                    <li>
                        <a href="">Existing Inventory</a>
                    </li>
                    <li>
                        <a href="">Used Inventory</a>
                    </li>
                    <li>
                        <a href="">Trade-In</a>
                    </li>
                    <li>
                        <a href="">Test Drive</a>
                    </li>
                    <li>
                        <a href="">Cybertruck</a>
                    </li>
                    <li>
                        <a href="">Roadster</a>
                    </li>
                    <li>
                        <a href="">Semi</a>
                    </li>
                    <li>
                        <a href="">Charging</a>
                    </li>
                    <li>
                        <a href="">Powerwall</a>
                    </li>
                    <li>
                        <a href="">Commercial Energy</a>
                    </li>
                    <li>
                        <a href="">Utilities</a>
                    </li>
                    <li>
                        <a href="">Find Us</a>
                    </li>
                    <li>
                        <a href="">Support</a>
                    </li>
                    <li>
                        <a href="">Investor Relations</a>
                    </li>
                    <li>
                        <a href="">Test Drive</a>
                    </li>

                </ul>
            </BurgerNav>
        </Container>
        
    );
}

export default Nav;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 60px;
    position: fixed;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    figure {
        transform: scale(1.5, 1);
        margin-left: 16px;
    }
`

const CarLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 16px;
        flex-wrap: nowrap;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const MenuLinks = styled.div`
    display: flex;
    align-items: center;
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 12px;
        flex-wrap: nowrap;
        cursor: not-allowed;
    }

    a:last-child {
        cursor: pointer;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 400px;
    z-index: 16;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;


    ul {
        padding: 48px 0 0 24px;
    }

    li {
        padding: 16px 0;
    }

    a {
        font-weight: 600px;
        cursor: not-allowed;
    }
`

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
`