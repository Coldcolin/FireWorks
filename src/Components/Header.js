import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo></Logo>
                <Home Link to='/'>Home</Home>
                <Add Link to='/Add'>Add</Add>
                <Setting>
                    <Register Link to='/Register'>Register</Register>
                    <Login link to='/Login'>Login</Login>
                </Setting>
            </Wrapper>
        </Container>
    )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #581845;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    color: white;
    justify-content: space-around;
    align-items: center;
    font-family: poppins;
    font-size: 25px;
    font-weight: 600;
`
const Home = styled(NavLink)`
    text-decoration: none;
    color: white;
`
const Add = styled(NavLink)`
    text-decoration: none;
    color: white;
`
const Logo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #FF5733;
`
const Setting = styled.div`
    
`
const Register = styled(NavLink)`
    text-decoration: none;
    color: white;
`
const Login = styled(NavLink)`
    text-decoration: none;
    color: white;
`
