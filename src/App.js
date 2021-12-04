import React from 'react'
import styled from 'styled-components'
import Header from './Components/Header'
import Body from './Components/Body'
import Add from './Components/Add'
import Edit from './Components/Edit'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Container>
        <Router>
        <Header/>
          <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/Add" element={<Add/>}/>
            <Route path="/Edit/:id" element={<Edit/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/>
          </Routes>
        </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``