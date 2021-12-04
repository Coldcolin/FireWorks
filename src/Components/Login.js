import React, {useState}from 'react'
import styled from 'styled-components'
import {NavLink, useNavigate} from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <Container>
            <Wrapper>
            <Info>
                Don't have an account yet? {" "}
                    <LinkTag to="/register">Click here</LinkTag>
            </Info>
                <Inputs wd placeholder="Enter your Email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
                <Inputs placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                <Submit to="/" mt="10px" wd="250px" bg="#581845"
                onClick={()=>{
                    // authLogin()
                }}>Login</Submit>
            
            
                <Submit to="/" mt="10px" wd="250px" bg="red"
                onClick={()=>{
                    // pushData()
                }}>Login with Google</Submit>
                
                <Submit to="/" mt="10px" wd="250px" bg="black"
                onClick={()=>{
                    // pushData()
                }}>Login with Github</Submit>
            </Wrapper>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: #C70039 ;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Wrapper = styled.div`
    padding-top: 50px;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding-bottom: 30px;
    border-radius: 10px;
`

const LinkTag = styled(NavLink)`
color: #581845;
text-decoration: none;
`
const Info = styled.div`
font-weight: bold;
color: red;
`
const Submit = styled.div`
width:${({wd})=>wd};
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${({bg})=>bg};
border-radius: 3px;
transform: scale(1);
transition: all 350ms;
color: white;
margin-top: ${({mt})=>mt};
text-decoration: none;
:hover{
    transform: scale(1.02);
    cursor: pointer;
}
`

const Inputs = styled.input`
outline: 2px solid #581845;
border: none;
width: ${({wd})=>(wd? "250px" : "200px")};
margin: 15px 0;
height: 30px;
padding-left: 10px;
`