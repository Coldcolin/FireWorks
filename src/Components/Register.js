import React, {useState}from 'react'
import styled from 'styled-components'
import {NavLink, useNavigate} from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <Container>
            <Wrapper>
            <Info>
                Already have an account? {" "}
                    <LinkTag to="/login">Click here</LinkTag>
            </Info>
                <Inputs wd placeholder="Enter your Email"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
                <Inputs placeholder="Enter your password"
                type='password'
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}/>
                    <Submit  mt="10px" wd="250px" bg="#581845"
                onClick={()=>{
                    
                }}>Register</Submit>
            
            
                <Submit  mt="10px" wd="250px" bg="red"
                onClick={()=>{
                    
                }}>Login with Google</Submit>
                
                <Submit  mt="10px" wd="250px" bg="black"
                onClick={()=>{
                    
                }}>Login with Github</Submit>
            </Wrapper>
        </Container>
    )
}

export default Register

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
border-radius: 5px;
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