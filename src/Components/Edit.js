import React, { useState} from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import {updateDoc, doc} from 'firebase/firestore'
import { db } from '../base'

const Edit = () => {
    const {id} = useParams()
    const [description, setDescription] = useState('')
    const navigate = useNavigate()
    
    const colRef = doc(db, "Books", id)
    const editFile = async () =>{
        const payload = {
            Description: description
        }
        await updateDoc(colRef, payload)
        navigate("/")
    }
    return (
        <Container>
            <Holder>
                <Wrapper>
                        <Head>Edit Book</Head>
                        <Input type= "text" value={description} placeholder="Change Description" onChange= {(e) =>{
                            setDescription(e.target.value)
                        }}/>
                        <Button
                        to ="/"
                        onClick={()=>{
                            editFile()
                        }}
                        >Submit</Button>
                    </Wrapper>
            </Holder>
        </Container>
    )
}

export default Edit

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #C70039 ;
`
const Holder = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.4);
    z-index: 1;
`
const Wrapper= styled.div`
    width: 300px;
    padding: 30px;
    margin: 100px auto;
    border-radius: 10px;
    background: white;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
    text-align: center;
`
const Head = styled.div`

`
const Input = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin: 15px;
    padding-left: 10px;
`
const Button = styled.div`
    width: 100px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #900C3F;
    color: white;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover{
        cursor: pointer;
        box-shadow: 15px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22);
        transition: all 400ms;
        background-color: #800b36;
    }
`