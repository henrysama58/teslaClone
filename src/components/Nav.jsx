import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <Container> 
                <figure>
                    <img src="assets/images/logo.svg" alt="" />
                </figure>
            <CarLinks>
                <a href="">Model S</a>
                <a href="">Model 3</a>
                <a href="">Model X</a>
                <a href="">Model Y</a>
                <a href="">Solar Roof</a>
                <a href="">Solar Panels</a>
            </CarLinks>
            <MenuLinks>
                <a href="">Shop</a>
                <a href="">Account</a>
                <a href="">Menu</a>
            </MenuLinks>
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
    }
`