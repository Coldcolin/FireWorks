import React, {useState} from 'react'
import styled from 'styled-components'
import {db} from '../base'
import {addDoc, collection} from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [Author, setAuthor] = useState("")
    const [Description, setDescription] = useState("")
    const navigate = useNavigate()
    const addBook = async() =>{
        const colRef= collection(db, "Books")
        const payload = {
            Author,
            Description
        }
        await addDoc(colRef, payload)
        navigate("/")
    }
    return (
        <Container>
            <Wrapper>
                <Desc onChange={(e)=>{setDescription(e.target.value)}} value={Description} type="text" placeholder='Add Description'/>
                <Auth onChange={(e)=>{setAuthor(e.target.value)}} value={Author} type="text"placeholder='Add Author Name'/>
                <Submit to ="/" onClick={addBook}>Submit</Submit>
            </Wrapper>
        </Container>
    )
}

export default Add

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #C70039 ;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Desc = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin: 15px;
    padding-left: 10px;
`
const Auth = styled.input`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    outline: none;
    border: none;
    margin: 15px;
    padding-left: 10px;
`
const Submit = styled.button`
    width: 100px;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #900C3F;
    color: white;

    :hover{
        cursor: pointer;
        box-shadow: 15px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22);
        transition: all 400ms;
        background-color: #800b36;
    }
`