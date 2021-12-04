import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import { NavLink} from 'react-router-dom'
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import { db } from "../base"

const Body = () => {
    const [data, setData] = useState([])
    const colRef= collection(db, "Books")
    const getData = async () =>{
        onSnapshot(colRef, (snapshot) => {
        let r = []
        snapshot.forEach((doc) =>{
            r.push({...doc.data(), id: doc.id})
        })
        setData(r)
    })
}
    const deleteData = async (id) => {
        await deleteDoc(doc(db, "Books", id))
    }
    useEffect(()=>{
        getData()
    }, [])
    return (
        <Container>
            <Wrapper>
                {
                    data?.map((props, id) =>(
                        <Card key={id}>
                <Description>{props.Description}</Description>
                <Author>{props.Author}</Author>
                <Buttons>
                <Edit Link to={{ pathname: `Edit/${props.id}`}}>Edit</Edit>
                <Delete
                onClick={()=>{
                    deleteData(props.id)
                }}
                >Delete</Delete>
                </Buttons>
                </Card>
                    ))
                }
            </Wrapper>
        </Container>
    )
}

export default Body

const Container = styled.div`
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: #C70039 ;
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const Card = styled.div`
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', sans-serif;
    height: 230px;
    margin: 20px;
    width: 350px;
    align-items: center;
    justify-content: center;
    background-color: #900C3F;
    border-radius: 10px;
    transform: scale(1.0);
    transition: all 0.5s;

    :hover{
        cursor: pointer;
        transform: scale(1.02);
        transition: all 350ms;
    }
`
const Description = styled.div`
    height: 130px;
    width: 300px;
    background-color: #DAF7A6;
    color: #581845;
    border-radius: 5px;
`
const Author = styled.div`
    height: 50px;
    width: 300px;
    color: white;
    font-size: 20px;
`
const Buttons = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Edit = styled(NavLink)`
    width: 50px;
    height: 20px;
    font-family: poppins;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: cornflowerblue;
    color: white;
    transform: scale(1.0);
    transition: all 0.5s;
    text-decoration: none;

    :hover{
        cursor: pointer;
        transform: scale(1.02);
        transition: all 350ms;
        box-shadow: 15px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22);
    }
`
const Delete = styled.button`
    width: 50px;
    height: 22px;
    font-family: poppins;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: crimson;
    color: white;
    transform: scale(1.0);
    transition: all 0.5s;

    :hover{
        cursor: pointer;
        transform: scale(1.02);
        transition: all 350ms;
        box-shadow: 15px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22);
    }
`

