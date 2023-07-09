import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/books" element={<BookList/>} />
      <Route exact path="/books/:id" element={<BookDetails/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
