import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import img from 'Components/assets/파이리.jpg';

const Header = styled.header`
    color:white;
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    background-color: rgba(35, 37, 38, 0.2);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.5);
`;

// padding 값 빼기

const List = styled.ul`
    display:flex;
`;

const Item = styled.li`
    width: 100px;
    text-align: center;
    font-weight: bold;
    border-bottom: 2px solid ${props => props.current ? "#e67e22" : "transparent"};
    transition: border-bottom .5s ease-in-out;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const StyledLink = styled(Link)`
    height: 70px;
    &:hover {
        color: rgba(255, 255, 255, 0.5); 
    }
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50%;
    margin-right:20px;
`;

export default withRouter(({location: {pathname}}) => (
    <Header>
        <List>
            <Item>
                <Logo src={img}></Logo>
            </Item>
            <Item current={pathname === "/"}>
                <StyledLink to="/">Movies</StyledLink>
            </Item>
            <Item current={pathname === "/tv"}>
                <StyledLink to="/tv">TV</StyledLink>
            </Item>
            <Item current={pathname === "/search"}>
                <StyledLink to="/search">Search</StyledLink>
            </Item>
        </List>
    </Header>
));